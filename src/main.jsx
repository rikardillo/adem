import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import HomePage from "./pages/homePage/HomePage";
import AboutPage from "./pages/aboutPage/AboutPage";
import Directiva from "./pages/aboutPage/Directiva";
import AboutInfo from "./pages/aboutPage/AboutInfo";
import Documents from "./pages/aboutPage/Documents";
import MembersPage from "./pages/membersPage/MembersPage";
import EventPage from "./pages/eventsPage/EventPage";
import PhotosPage from "./pages/photosPage/PhotosPage";
import ContactPage from "./pages/contactPage/ContactPage";
import NewsPage from "./pages/newsPage/NewsPage";
import NewsArticle from "./pages/newsPage/NewsArticle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "nosotros",
        element: <AboutPage />,
        children: [
          {
            index: true,
            path: "sobre",
            element: <AboutInfo />,
          },
          {
            path: "directiva",
            element: <Directiva />,
          },
          {
            path: "documentos",
            element: <Documents />,
          },
        ],
      },
      {
        path: "noticias",
        element: <NewsPage />,
      },
      {
        path: "noticias/:articleId",
        element: <NewsArticle />,
      },
      {
        path: "eventos",
        element: <EventPage />,
      },
      {
        path: "galería",
        element: <PhotosPage />,
      },
      {
        path: "miembros",
        element: <MembersPage />,
      },
      {
        path: "contacto",
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
