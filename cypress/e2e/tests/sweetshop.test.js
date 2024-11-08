// cypress/e2e/pages/sweetshop.test.js

import PlaylistPage from '../pages/playlist_page';
import { songsList, selectedSongs, trackName } from '../config/playlist_config';

describe('Playlist App Functionality Test', () => {

  const playlistPage = new PlaylistPage();

  beforeEach(() => {
    playlistPage.visit();
  });

  it('Search Functionality', () => {
    playlistPage.searchTrack(trackName);
    playlistPage.verifyTrackInList(trackName);

    songsList.forEach(song => {
      if (song !== trackName) {
        playlistPage.verifyTrackNotInList(song);
      };
    });
  });

  it('Add Track Using "+" Button', () => {
    playlistPage.addTrack(trackName, songsList);
    playlistPage.verifyTrackInPlaylist(trackName);
  });
  
  it('Add Multiple Tracks', () => {
    playlistPage.addMultipleTracks(selectedSongs, songsList);
    playlistPage.clickAddTracksButton();

    selectedSongs.forEach(song => {
      playlistPage.verifyTrackInPlaylist(song);
    });
  });
});
