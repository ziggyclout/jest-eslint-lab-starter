
// Utility Functions

/**
 * Capitalizes the first letter of each word in the input string.
 * @param {string} input - The input string.
 * @returns {string} - The formatted string.
 */
function capitalizeWords(str) {
  if (!str) return "";

  return str[0].toUpperCase() + str.slice(1);
}



/**
 * Filters active users from the array.
 * @param {Array} users - An array of user objects.
 * @returns {Array} - An array of active user objects.
 */
function filterActiveUsers(users) {
    return users.filter(user => user.isActive);
}

/**
 * Logs an action performed by a user with a timestamp.
 * @param {string} action - The action performed.
 * @param {string} username - The name of the user.
 * @returns {string} - The log message.
 */
function logAction(action = "", username = "") {
  const timestamp = new Date().toISOString();

  const userPart = username ? `User ${username}` : "User";
  const actionPart = action ? `performed ${action}` : "performed";

  return `${userPart} ${actionPart} at ${timestamp}`;
}







module.exports = { capitalizeWords, filterActiveUsers, logAction };
