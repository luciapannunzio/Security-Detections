import { Detection } from '../types/detections';

interface DetectionListProps {
    detections: Detection[];
}

const DetectionList = ({ detections }: DetectionListProps) => {
    return (
        <ul className='detection-list'>
            {detections.map((detection: Detection) => (
                <li key={detection.id} className={`detection-item ${detection.severity}`}>
                    <h3 className='title'>{detection.title}</h3>
                    <p>Service: {detection.service}</p>
                    <p>Status: {detection.status}</p>
                    <p>Triggered at: {new Date(detection.triggeredAt).toLocaleString()}</p>
                </li>
            ))}
        </ul>
    );
};

export default DetectionList;