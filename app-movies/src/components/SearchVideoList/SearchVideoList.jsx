import { useState } from 'react'
import styles from "./SearchVideoList.module.css";

import VideoList from "../../components/VideoList/VideoList";


function filterVideos(videos, searchText) {
    return videos.filter((video) => video.category.includes(searchText) || video.title.includes(searchText))
}

function SearchVideoList({ videos }) {
    const [searchText, setSearchText] = useState('Anime')

    const foundVideos = filterVideos(videos, searchText)

  return (
    <section className={styles.container}>
      <input
        type="search"
        placeholder="Buscar vídeos..."
        onChange={(event) => setSearchText(event.target.value)}
        value={searchText}
      />
      <VideoList videos={foundVideos} emptyHeading={`No hay vídeos sobre "${searchText}"`} />
    </section>
  );
}

export default SearchVideoList;
