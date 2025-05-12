// ./functions/crm_function/index.js

console.log('📦 crm_function index.js loaded');

const express = require('express');
const router = express.Router();

// ✅ Import and mount all routes
router.use('/api/auth', require('./routes/authRoutes'));
router.use('/api/campaigns', require('./routes/campaignsRoutes'));
router.use('/api/lists', require('./routes/listRoutes'));
router.use('/api/subscribers', require('./routes/subscriberRoutes'));
router.use('/api/dashboard', require('./routes/dashboardRoutes'));
router.use('/api/emailqueue', require('./routes/emailQueuedRoutes'));
router.use('/api/bounce', require('./routes/bounceRoutes'));
router.use('/api/upload', require('./routes/uploadRoutes'));
router.use('/api/smtp', require('./routes/smtpRoutes'));
router.use('/api/smsqueue', require('./routes/smsRoutes'));
router.use('/api/payments', require('./routes/paymentRoutes'));
router.use('/api/track', require('./routes/trackingRoutes'));
router.use('/api/users', require('./routes/userRoutes'));
router.use('/api/unsubscribe', require('./routes/unsubscribesRoutes'));
router.use('/api/templates', require('./routes/templatesRoutes'));
router.use('/api/workflow', require('./routes/workflowRoutes'));

module.exports = router;
