import { Route, Routes } from "react-router-dom";
import { Homepage } from "@/components/pages/Homepage";
import { GifhovPage } from "@/components/pages/GifhovPage";
import { EmbedPage } from "@/components/pages/EmbedPage";
import { BrowsePage } from "@/components/pages/BrowsePage";
export function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/user/:ownerID/gifhov/:gifhovID"
          element={<GifhovPage />}
        ></Route>
        <Route
          path="/user/:ownerID/embed/:gifhovID"
          element={<EmbedPage />}
        ></Route>
        <Route path="/browse" element={<BrowsePage />}></Route>
      </Routes>
    </>
  );
}
