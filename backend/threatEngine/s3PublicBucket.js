function detectS3PublicBucket(log) {
  if (log.eventName === "PutBucketAcl" && log.acl === "public-read") {
    return {
      detected: true,
      threat: "Public S3 Bucket",
      severity: "Critical",
      bucket: log.bucketName,
    };
  }

  return {
    detected: false,
  };
}

module.exports = detectS3PublicBucket;
