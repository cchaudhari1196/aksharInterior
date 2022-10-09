import React from 'react'
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import appData from "../../data/app.json"

const Video = () => {
  React.useEffect(() => {
      console.clear();
    }, [])
    const [isOpen, setOpen] = React.useState(false);
    return (
      <section
        className="video bg-img parallaxie"
        style={{ backgroundImage: `url(${appData.homeVideo.thumbnail})` }}
      >
        {typeof window !== "undefined" && (
          <ModalVideo
            channel={appData.homeVideo.channel}
            autoplay
            isOpen={isOpen}
            videoId={appData.homeVideo.videoId}
            onClose={() => setOpen(false)}
          />
        )}
        <a
          className="vid valign"
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
          href="https://vimeo.com/758425790"
        >
          <div className="vid-butn">
            <span className="icon">
              <i className="pe-7s-play"></i>
            </span>
          </div>
        </a>
      </section>
    );
}

export default Video