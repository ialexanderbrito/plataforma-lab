import { Route, Routes } from 'react-router-dom';

import { Event } from 'pages/Event';

export function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Event />} />
    </Routes>
  );
}
