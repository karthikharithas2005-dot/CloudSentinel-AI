function detectRootLogin(log) {
  if (
    log.eventName === "ConsoleLogin" &&
    log.userName === "root" &&
    log.status === "Success"
  ) {
    return {
      detected: true,
      threat: "Root Account Login",
      severity: "Critical",
      user: log.userName,
      sourceIPAddress: log.sourceIPAddress,
      timestamp: new Date().toISOString(),
    };
  }

  return {
    detected: false,
  };
}

module.exports = detectRootLogin;
