import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router'
import { PhoneFrame } from './components/PhoneFrame'
import { ChatStoreProvider } from './data/ChatStore'
import { ChatScreen } from './screens/ChatScreen'
import { HomeScreen } from './screens/HomeScreen'
import { InboxScreen } from './screens/InboxScreen'
import { PlaceholderScreen } from './screens/PlaceholderScreen'
import { ProfileScreen } from './screens/ProfileScreen'
import { VideoPlayerScreen } from './screens/VideoPlayerScreen'

function Shell() {
  return (
    <PhoneFrame>
      <Outlet />
    </PhoneFrame>
  )
}

const router = createBrowserRouter([
  {
    element: <Shell />,
    children: [
      { index: true, element: <HomeScreen /> },
      { path: 'shop', element: <PlaceholderScreen /> },
      { path: 'create', element: <PlaceholderScreen /> },
      { path: 'inbox', element: <InboxScreen /> },
      { path: 'profile', element: <ProfileScreen /> },
      { path: 'chat/:friendId', element: <ChatScreen /> },
      { path: 'chat/:friendId/video/:itemId', element: <VideoPlayerScreen /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
])

export default function App() {
  return (
    <ChatStoreProvider>
      <RouterProvider router={router} />
    </ChatStoreProvider>
  )
}
