export function fetchUsers(currentPage) {
  const url = `https://randomuser.me/api/?page=${currentPage}&results=20`;
  return fetch(url);
}
