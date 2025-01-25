from moviepy.editor import VideoFileClip
from PIL import Image
from flask_cors import CORS
import os
from flask import request
from flask import Flask
from flask import render_template
from flask import g
from flask import send_file
import json
from werkzeug.utils import secure_filename
import speech_recognition as sr
from flask import jsonify

app = Flask(__name__,static_folder='../static')
CORS(app)



@app.before_request
def load_user():
    # g.url="https://videoanalytics.usln.in"
    # g.videoDir="/var/www/videoanalytics.usln.in/video_files"
    # g.imageDir="/var/www/videoanalytics.usln.in/image_files"
    g.url="https://localhost:3000"
    g.videoDir="/tmp/video_files"
    g.imageDir="/tmp/image_files"


@app.route("/videoConverter", methods=["POST"])
def video_formatter():
    print("Into the function of video converter")
    try:
        videofile = request.files["video"]

        # Validate the file type, for example, allow only MP4 files
        allowed_extensions = {'mp4','webm','avi'}
        if videofile.filename.split('.')[-1] not in allowed_extensions:
            return {"status": "error", "message": "Invalid file format"}

        filename = secure_filename(videofile.filename)
        outputFilename=filename.split(".")[0]
        print("Filename is : ",filename)
        formatValue = request.form.get("format")
        if not os.path.exists(g.videoDir):
            print("Path does not exist")
            os.makedirs(g.videoDir)
        outputfilepath = f"{g.videoDir}/{outputFilename}.{formatValue}"
        videofile.save(outputfilepath)

        response_data = {
            "filename": f"{outputFilename}.{formatValue}",
            "status": "success"
        }
        return response_data
    except Exception as e:
        print("Error in the video converter function:", e)
        response_data = {
            "message": f"Error: {e}",
            "status": "error"
        }
        return response_data





@app.route("/imageConverter", methods=["POST"])
def image_converter():
    print("Print into the function of image converter")
    try:
        image = request.files["file"]
        formatValue = request.form['format']
        formatValue = request.form.get('format', None)
        if formatValue is not None:
            formatValue = str(formatValue)
        print("Image is : ",image)
        print("Format is : ",formatValue)
        filename = image.filename    
        outputFilename=filename.split(".")[0]
        try:
            im = Image.open(image)
            im = im.convert("RGB")
        except Exception as e:
            response_data={"message":f"{e}","status":"error"}
            return response_data
        if not os.path.exists(g.imageDir):
            print("Path does not exist")
            os.makedirs(g.imageDir)
        outputfilepath = f"{g.imageDir}/{outputFilename}.{formatValue}"
        im.save(outputfilepath)
        response_data={"filename":f"{outputFilename}.{formatValue}","status":"success"}
        print("The response data is : ",response_data)
        return response_data
    except Exception as e:
        print("Error occured in the image converter : ",e)
        response_data={"error":e,"status":"error"}
        print("The response data is : ",response_data)
        return response_data





@app.route("/")
def index_page():
    return render_template("index.html",url=g.url)

@app.route("/image_converter/page")
def image_converter_page():
    return render_template("image_converter.html",url=g.url)



@app.route("/download_image", methods=["GET","POST"])
def download_image():
    print("Into the function of download image")
    try:
        filename=request.args.get("filename")
        if filename is None:
            return "Missing 'filename' query parameter", 400

        imagepath = f"{g.imageDir}/{filename}"

        response = send_file(imagepath, as_attachment=True)
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
        response.headers["Pragma"] = "no-cache"
        response.headers["Expires"] = "0"
        
        # Set the Content-Disposition header to prompt the browser to download the file
        response.headers["Content-Disposition"] = f'attachment; filename="{filename}"'

        return response
    except Exception as e:
        print("Error occurred in the download image function:", e)
        response_data = {"message": f"Error: {e}", "status": "Error"}
        return response_data




@app.route("/download_video", methods=["GET"])
def download_video():
    print("Into the function of download image")
    try:
        filename = request.args.get("filename")
        if filename is None:
            return "Missing 'filename' query parameter", 400

        videoPath = f"{g.videoDir}/{filename}"

        response = send_file(videoPath, as_attachment=True)
        response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
        response.headers["Pragma"] = "no-cache"
        response.headers["Expires"] = "0"

        # Set the Content-Disposition header to prompt the browser to download the file
        response.headers["Content-Disposition"] = f'attachment; filename="{filename}"'

        return response
    except Exception as e:
        print("Error occurred in the download image function:", e)
        response_data = {"message": f"Error: {e}", "status": "Error"}
        return response_data


@app.route("/video_converter/page")
def video_converter_page():
    return render_template("video_converter.html",url=g.url)

@app.route("/privacy_policy")
def privacy_policy_page():
    return render_template("privacy_policy.html",url=g.url)

@app.route("/video_to_text", methods=["POST"])
def video_to_text():
    print("Into the function of video-to-text conversion")
    try:
        videofile = request.files["video"]

        # Validate the file type, for example, allow only MP4 files
        allowed_extensions = {'mp4', 'webm', 'avi'}
        if videofile.filename.split('.')[-1] not in allowed_extensions:
            return {"status": "error", "message": "Invalid file format"}

        filename = secure_filename(videofile.filename)
        outputFilename = filename.split(".")[0]
        print("Filename is : ", filename)

        if not os.path.exists(g.videoDir):
            print("Path does not exist")
            os.makedirs(g.videoDir)

        # Save the video file temporarily in /tmp
        video_path = f"{g.videoDir}/{filename}"
        videofile.save(video_path)

        # Extract audio from the video
        audio_path = f"{g.videoDir}/{outputFilename}.wav"
        video_clip = VideoFileClip(video_path)
        video_clip.audio.write_audiofile(audio_path)

        # Convert audio to text using speech recognition
        recognizer = sr.Recognizer()
        with sr.AudioFile(audio_path) as source:
            audio_data = recognizer.record(source)
            text = recognizer.recognize_google(audio_data)

        # Save the text to a file in /tmp
        text_file_path = f"{g.videoDir}/{outputFilename}.txt"
        with open(text_file_path, "w") as text_file:
            text_file.write(text)

        # Cleanup temporary files
        os.remove(video_path)
        os.remove(audio_path)

        response_data = {
            "filename": f"{outputFilename}.txt",
            "script": text,
            "status": "success"
        }
        return jsonify(response_data)
    except Exception as e:
        print("Error in the video-to-text function:", e)
        response_data = {
            "message": f"Error: {e}",
            "status": "error"
        }
        return jsonify(response_data)



if __name__ == "__main__":
    CORS(app)
    app.run(port=8006,host="0.0.0.0",debug=True)
    
