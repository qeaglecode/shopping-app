import { useState } from 'react';
import styles from './detail.module.scss';

const VideoDetailPage = () => {
	const [sectionVideoSize, setSectionVideoSize] = useState({ width: 414, height: 220 } as any);

	const handleMouseDown = (e: any) => {
		// Save the starting mouse position and video size
		const startX = e.pageX;
		const startY = e.pageY;
		
		const startWidth = sectionVideoSize.width;
		const startHeight = sectionVideoSize.height;
	
		// Create a new event listener to track mouse movements
		document.addEventListener('mousemove', handleMouseMove);
		document.addEventListener('mouseup', handleMouseUp);
	
		// Define the mousemove event handler
		function handleMouseMove(e: any) {
			// Calculate the new video size based on the mouse movement
			const newWidth = startWidth + (e.pageX - startX);
			const newHeight = startHeight + (e.pageY - startY);

			if (newHeight < 100 || newHeight > 500) return;

			setSectionVideoSize({
				width: newWidth,
				height: newHeight
			});
		}
	
		// Define the mouseup event handler
		function handleMouseUp(e: any) {
			// Remove the event listeners
			document.removeEventListener('mousemove', handleMouseMove);
			document.removeEventListener('mouseup', handleMouseUp);
		}
	};
	
	return (
    <div className="container-content">
			<div className={styles['video-detail-page']}>
				<div
					className={styles['section-video']}
					style={{
						height: sectionVideoSize.height
					}}
					onMouseDown={handleMouseDown}
					onTouchStart={handleMouseDown}
				>
					<div className={styles['video-box']}>
						<video
							src="/2.mp4"
							autoPlay
							loop
							controls
							height="100%"
							width="100%"
						/>
					</div>
				</div>
				
				<div className={styles['section-tab']}
					style={{
						top: sectionVideoSize.height,
					}}
				>
					Hello
				</div>
			</div>
		</div>
	);
}

VideoDetailPage.Layout = 'HeaderOnly';

export default VideoDetailPage;