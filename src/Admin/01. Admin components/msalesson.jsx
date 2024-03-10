import React, { useEffect, useState } from 'react';
import '../02. Admin components CSS/msalesson.css';
import MediaScroller from '../../pages/insidecomponents/mediascroller';
import { storage } from "../../index";
import { ref, uploadBytes, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import PDFModal from './PDFModal'; // Import the PDFModal component

export function MSALesson() {
  const [videoUrls, setVideoUrls] = useState([]);
  const [pdfFiles, setPdfFiles] = useState([]);
  const [videoUpload, setVideoUpload] = useState(null);
  const [pdfUpload, setPdfUpload] = useState(null);
  const [modalOpen, setModalOpen] = useState(false); // State variable to control modal visibility
  const [selectedPdf, setSelectedPdf] = useState(null); // State variable to store selected PDF

  useEffect(() => {
    fetchVideos();
    fetchPDFs();
  }, []);

  const fetchVideos = async () => {
    try {
      const videoRef = ref(storage, 'videos');
      const videoList = await listAll(videoRef);
      const urls = await Promise.all(videoList.items.map(async (item) => {
        const metadata = await getMetadata(item);
        return { url: await getDownloadURL(item), name: metadata.name.split('.').slice(0, -1).join('.') };
      }));
      setVideoUrls(urls);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const fetchPDFs = async () => {
    try {
      const pdfRef = ref(storage, 'pdfs');
      const pdfList = await listAll(pdfRef);
      const urls = await Promise.all(pdfList.items.map(async (item) => {
        const metadata = await getMetadata(item);
        return { url: await getDownloadURL(item), name: metadata.name.split('.').slice(0, -1).join('.') };
      }));
      setPdfFiles(urls);
    } catch (error) {
      console.error('Error fetching PDFs:', error);
    }
  };

  const uploadVideo = async () => {
    try {
      if (videoUpload == null) return;
      const videoRef = ref(storage, `videos/${videoUpload.name}`);
      await uploadBytes(videoRef, videoUpload);
      alert("Video Uploaded");
      fetchVideos(); // Refresh the list of videos after uploading
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  const uploadPDF = async () => {
    try {
      if (pdfUpload == null) return;
      const pdfRef = ref(storage, `pdfs/${pdfUpload.name}`);
      await uploadBytes(pdfRef, pdfUpload);
      alert("PDF Uploaded");
      fetchPDFs(); // Refresh the list of PDFs after uploading
    } catch (error) {
      console.error('Error uploading PDF:', error);
    }
  };

  // Function to open the PDF modal
  const openPdfModal = (pdf) => {
    setSelectedPdf(pdf);
    setModalOpen(true);
  };

  // Function to close the PDF modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="msalesson-container">
      <div className="title-lesson">
        <h1>Lesson Materials</h1>
      </div>
      <div className="msctv">
        <MediaScroller>
          {videoUrls.map((video, index) => (
            <div className="media-element" key={index} onClick={() => openPdfModal(video)}>
              <video src={video.url} controls />
              <p className="title">{video.name}</p>
            </div>
          ))}
          <div className="addvideo-element">
            <input
              id="video-upload"
              type="file"
              onChange={(event) => {
                setVideoUpload(event.target.files[0]);
              }}
            />
            <button className="addvideo-button" onClick={uploadVideo}>Upload Video</button>
          </div>
        </MediaScroller>
        <MediaScroller>
          {pdfFiles.map((pdf, index) => (
            <div className="media-element" key={index} onClick={() => openPdfModal(pdf)}>
              <iframe src={pdf.url} width="100%" title={pdf.name}></iframe>
              <p className="title">{pdf.name}</p>
            </div>
          ))}
          <div className="addpdf-element">
            <input
              id="pdf-upload"
              type="file"
              accept=".pdf"
              onChange={(event) => {
                setPdfUpload(event.target.files[0]);
              }}
            />
            <button className="addpdf-button" onClick={uploadPDF}>Upload PDF</button>
          </div>
        </MediaScroller>
      </div>
      {/* Render PDF modal */}
      <PDFModal isOpen={modalOpen} closeModal={closeModal} pdfUrl={selectedPdf ? selectedPdf.url : null} />
    </div>
  );
}

export default MSALesson;
