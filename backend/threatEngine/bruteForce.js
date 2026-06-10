const failedAttempts = {};

function detectBruteForce(log) {
  if (log.eventName === "ConsoleLogin" && log.status === "Failure") {
    const ip = log.sourceIPAddress;

    if (!failedAttempts[ip]) {
      failedAttempts[ip] = 0;
    }

    failedAttempts[ip]++;

    if (failedAttempts[ip] >= 5) {
      return {
        detected: true,
        threat: "Brute Force Attack",
        severity: "High",
        failedAttempts: failedAttempts[ip],
      };
    }
  }

  return {
    detected: false,
  };
}

module.exports = detectBruteForce;
