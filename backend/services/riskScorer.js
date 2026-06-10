function calculateRisk(alert) {
  const scores = {
    "Root Account Login": 95,
    "Public S3 Bucket": 90,
    "Security Group Exposure": 85,
    "Privilege Escalation": 80,
    "Unauthorized IAM User Creation": 70,
    "Brute Force Attack": 60,
  };

  return scores[alert.threat] || 10;
}

module.exports = calculateRisk;
