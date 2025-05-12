import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import axios from 'axios';
import TemplateCard from './TemplateCard';

const SavedTemplates = () => {
    const [templates, setTemplates] = useState([]);

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const response = await axios.get('https://clearly1-pool-api-24d8ed38984c.herokuapp.com/api/templates/all');
                setTemplates(response.data);
            } catch (error) {
                console.error('Error fetching templates:', error);
            }
        };

        fetchTemplates();
    }, []);

    return (
        <Row>
            {templates.map((template) => (
                <TemplateCard key={template.id} template={template} />
            ))}
        </Row>
    );
};

export default SavedTemplates;
