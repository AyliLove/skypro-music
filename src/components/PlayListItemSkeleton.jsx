const PlayListItemSkeleton = () => {
    return (
      <div className="playlist__item">
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image"></div>
            <div className="track__title-text">
              <div className="rectangle11"></div>
            </div>
          </div>
          <div className="track__author">
            <div className="rectangle12"></div>
          </div>
          <div className="track__album">
            <div className="rectangle13"></div>
          </div>
        </div>
      </div>
    )
  }
  
  export default PlayListItemSkeleton