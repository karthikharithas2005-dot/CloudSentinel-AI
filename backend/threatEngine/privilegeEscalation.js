function detectPrivilegeEscalation(log) {
  const suspiciousEvents = [
    "AttachUserPolicy",
    "PutUserPolicy",
    "AttachRolePolicy",
    "PutRolePolicy",
  ];

  if (suspiciousEvents.includes(log.eventName)) {
    return {
      detected: true,
      threat: "Privilege Escalation",
      severity: "Critical",
      event: log.eventName,
    };
  }

  return {
    detected: false,
  };
}

module.exports = detectPrivilegeEscalation;
