import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';
import VideoOverlay from '../CRMpages/CRMutils/dashboardanimations';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validationError, setValidationError] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        setValidationError('');

        try {
            const response = await axios.post('https://clearly1-pool-api-24d8ed38984c.herokuapp.com/api/auth/signin', { email, password });
            const { user, token } = response.data;

            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);

            navigate('/dashboard');

        } catch (error) {
            console.error('Sign-in failed', error);
            if (error.response && error.response.data && error.response.data.error) {
                setValidationError(error.response.data.error);
            } else {
                setValidationError('An unexpected error occurred. Please try again.');
            }
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
        navigate('/dashboard');
    };

    return (
        <div>
            <Form onSubmit={handleSignIn} className="p-4 rounded bg-white" style={{ margin: 'auto', maxWidth: '1000px', width: '100%', boxShadow: '0 0 20px steelblue' }}>
                <Button disabled={true} style={{ background: 'linear-gradient(to right bottom, #4ea0ff, #2c6cb0)', opacity: '1.0' }} variant="primary" type="submit" className="w-100">
                    <h2 style={{ padding: '20px' }}>Clubhouse Links CRM Sign In</h2>
                </Button>

                {/* Email Field */}
                <Form.Group className="mb-3" controlId="formSignInEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        required
                        isInvalid={validationError === 'User not found'}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationError === 'User not found' && validationError}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* Password Field */}
                <Form.Group className="mb-3" controlId="formSignInPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                        isInvalid={validationError === 'Invalid password'}
                    />
                    <Form.Control.Feedback type="invalid">
                        {validationError === 'Invalid password' && validationError}
                    </Form.Control.Feedback>
                </Form.Group>

                {/* General error */}
                {validationError && !['User not found', 'Invalid password'].includes(validationError) && (
                    <div className="text-danger mb-3">{validationError}</div>
                )}

                {/* Sign-In Button */}
                <Button style={{ backgroundColor: 'steelblue' }} variant="primary" type="submit" className="w-100">
                    Sign In
                </Button>
            </Form>

            {/* Modal for successful login */}
            <Modal show={showModal} onHide={handleModalClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Login Successful</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Welcome back! Redirecting you to your dashboard...</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={handleModalClose}>
                        Go to Dashboard
                    </Button>
                </Modal.Footer>
            </Modal>
            <VideoOverlay />
        </div>
    );
};

export default SignIn;
