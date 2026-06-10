function detectSecurityGroupExposure(log) {
  if (
    log.eventName === "AuthorizeSecurityGroupIngress" &&
    log.cidrIp === "0.0.0.0/0" &&
    (log.port === 22 || log.port === 3389)
  ) {
    return {
      detected: true,
      threat: "Security Group Exposure",
      severity: "Critical",
      port: log.port,
      source: log.cidrIp,
    };
  }

  return {
    detected: false,
  };
}

module.exports = detectSecurityGroupExposure;
