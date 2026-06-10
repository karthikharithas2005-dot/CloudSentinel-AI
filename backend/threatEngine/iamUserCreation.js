function detectIAMUserCreation(log) {
  if (log.eventName === "CreateUser") {
    return {
      detected: true,
      threat: "Unauthorized IAM User Creation",
      severity: "High",
      event: log.eventName,
    };
  }

  return {
    detected: false,
  };
}

module.exports = detectIAMUserCreation;
