module.exports = function createDreamTeam(members) {
  if (!members || members.length == 0) {
    return false;
  }
  let dream = [];
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == "string") {
      member = members[i].trim();
      dream.push(member[0].toUpperCase());
    }
  }
  return dream.sort().join('');
};