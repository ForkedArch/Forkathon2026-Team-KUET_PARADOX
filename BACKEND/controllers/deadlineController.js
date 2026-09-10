// GET deadline information
const getDeadline = (req, res) => {
  const now = new Date();

  // Bangladesh Time (UTC + 6)
  const bangladeshNow = new Date(
    now.getTime() + 6 * 60 * 60 * 1000
  );

  // Today's deadline: 11:59 PM Bangladesh time
  const deadline = new Date(bangladeshNow);

  deadline.setHours(23, 59, 0, 0);

  // If today's deadline has passed,
  // use tomorrow's 11:59 PM
  if (deadline <= bangladeshNow) {
    deadline.setDate(deadline.getDate() + 1);
  }

  const remainingSeconds = Math.max(
    0,
    Math.floor((deadline - bangladeshNow) / 1000)
  );

  const remainingMinutes = Math.floor(
    remainingSeconds / 60
  );

  res.json({
    success: true,
    deadline: deadline.toISOString(),
    currentTime: bangladeshNow.toISOString(),
    remainingSeconds: remainingSeconds,
    remainingMinutes: remainingMinutes
  });
};

module.exports = {
  getDeadline
};