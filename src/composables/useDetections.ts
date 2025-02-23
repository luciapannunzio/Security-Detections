import { useState, useEffect } from 'react';
import { fetchDetections } from '../service/api';
import { Detection } from '../types/detections';

export const useDetections = () => {
    const [detections, setDetections] = useState<Detection[]>([]);
    const [filteredDetections, setFilteredDetections] = useState<Detection[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getDetections = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await fetchDetections();
                setDetections(data);
                setFilteredDetections(data);
            } catch (err: any) {
                setError('Failed to load detections. Please reload the page.');
                console.error('Fetch error:', err);
            } finally {
                setLoading(false);
            }
        };
        getDetections();
    }, []);

    const handleSearch = (query: string): void => {
        setSearchQuery(query);
        const lowerCaseQuery = query.toLowerCase();
        const filtered = detections.filter((detection) =>
            detection.title.toLowerCase().includes(lowerCaseQuery) ||
            detection.id.toString().includes(lowerCaseQuery) ||
            detection.service.toLowerCase().includes(lowerCaseQuery) ||
            detection.status.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredDetections(filtered);
    };

    return {
        detections,
        filteredDetections,
        searchQuery,
        setSearchQuery: handleSearch,
        loading,
        error
    };
};