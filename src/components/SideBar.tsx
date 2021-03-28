import { Button } from "./Button";

import '../styles/sidebar.scss';
import { useMemo, useState } from "react";

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  clickButton(id: number): void
  genres: GenreResponseProps[];
  selectedGenreId: number;
}

export function SideBar({ clickButton, genres, selectedGenreId }: SideBarProps) {
  // Complete aqui

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => clickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}