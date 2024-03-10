import React, { useState, useEffect } from 'react';
import './mainscreenintime.css';
import { storage } from "../../index";
import { ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
import MediaScroller from './mediascroller';
import bg2 from '../../Assets/background/bg2.jpg';
import PDFModal from '../../Admin/01. Admin components/PDFModal'; // Import the PDFModal component

export function Mainscreenin() {
  const [videoUrls, setVideoUrls] = useState([]);
  const [pdfUrls, setPdfUrls] = useState([]);
  const [modalOpen, setModalOpen] = useState(false); // State variable to control modal visibility
  const [selectedPdf, setSelectedPdf] = useState(null); // State variable to store selected PDF URL

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
      setPdfUrls(urls);
    } catch (error) {
      console.error('Error fetching PDFs:', error);
    }
  };

  const openPdfModal = (pdf) => {
    setSelectedPdf(pdf.url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="mainscreenincontainer-l">
      <img className="bg2" src={bg2} alt="bg2-alt" />
      <div className="title-lesson">
        <h1>Lesson Materials</h1>
      </div>
      <div className="msctv">
        <MediaScroller>        
          {videoUrls.map((video, index) => (
            <div className="media-element" key={index}>
              <video src={video.url} controls />
              <p className="title">{video.name}</p>
            </div>
          ))}
        </MediaScroller>
        <MediaScroller>
          {pdfUrls.map((pdf, index) => (
            <div className="media-element" key={index} onClick={() => openPdfModal(pdf)}>
              <iframe src={pdf.url} width="100%" title={pdf.name}></iframe>
              <p className="title">{pdf.name}</p>
            </div>
          ))}
        </MediaScroller>
      </div>
      {/* Render PDF modal */}
      <PDFModal isOpen={modalOpen} closeModal={closeModal} pdfUrl={selectedPdf} />
    </div>
  );
}

export default Mainscreenin;
