export const fetchAllCafes = () => (
  $.ajax({
    url: '/api/cafes',
    method: 'GET',
  })
);

export const fetchCafe = cafeId => (
  $.ajax({
    url: `/api/cafes/${cafeId}`,
    method: 'GET'
  })
);