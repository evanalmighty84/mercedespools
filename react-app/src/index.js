import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './styles/templatemo-style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import App from './App'; // Homepage
import Dashboard from './CRMpages/Dashboard';
import CampaignPage from './CRMpages/CampaignPage';
import SendGoogleReviewForm from "./CRMpages/SendGoogleReviewFormBrad";
import SendGoogleReviewForm2 from "./CRMpages/SendGoogleReviewFormTerri";
import SendGoogleReviewForm3 from "./CRMpages/SendGoogleReviewFormJohn";
import SendGoogleReviewForm4 from "./CRMpages/SendGoogleReviewFormDavid";
import WorkflowPage from './CRMpages/WorkflowContainer';
import CampaignContent from './CRMpages/CampaignContent';
import SignUp from './CRMpages/SignUp';
import SignIn from './CRMpages/SignIn';
import ListsPage from "./CRMcomponents/Lists/ListsPage";
import ListForm from "./CRMcomponents/Lists/ListForm";
import NonUserDashboard from "./CRMcomponents/NonUserDashboard";
import SubscribersPage from './CRMcomponents/Subscribers/SubscribersPage';
import SubscriberDetails from './CRMcomponents/Subscribers/SubscriberDetails';
import SubscribersForm from "./CRMcomponents/Subscribers/SubscribersForm";
import UnsubscribePage from "./CRMpages/UnsubscribePage";
import Settings from "./CRMpages/Settings";
import SMSConsentPage from "./CRMpages/ConsentPage";
import EmailVerified from "./CRMpages/EmailVerified";
import EmailQueuedPage from "./CRMpages/EmailQueuedPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
            <HashRouter>
                    <Routes>
                            <Route path="/" element={<App />} />
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route path="/campaign" element={<CampaignPage />} />
                            <Route path="/send-google-review-brad" element={<SendGoogleReviewForm />} />
                            <Route path="/send-google-review-terri" element={<SendGoogleReviewForm2 />} />
                            <Route path="/send-google-review-john" element={<SendGoogleReviewForm3 />} />
                            <Route path="/send-google-review-david" element={<SendGoogleReviewForm4 />} />
                            <Route path="/workflow" element={<WorkflowPage />} />
                            <Route path="/campaign-content" element={<CampaignContent />} />
                            <Route path="/signup" element={<SignUp />} />
                            <Route path="/signin" element={<SignIn />} />
                            <Route path="/lists" element={<ListsPage />} />
                            <Route path="/list-form" element={<ListForm />} />
                            <Route path="/non-user-dashboard" element={<NonUserDashboard />} />
                            <Route path="/subscribers" element={<SubscribersPage />} />
                            <Route path="/subscriber-details" element={<SubscriberDetails />} />
                            <Route path="/subscribers-form" element={<SubscribersForm />} />
                            <Route path="/unsubscribe" element={<UnsubscribePage />} />
                            <Route path="/settings" element={<Settings />} />
                            <Route path="/sms-consent" element={<SMSConsentPage />} />
                            <Route path="/email-verified" element={<EmailVerified />} />
                            <Route path="/email-queued" element={<EmailQueuedPage />} />
                    </Routes>
            </HashRouter>
    </React.StrictMode>
);
