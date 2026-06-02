<<<<<<< HEAD
from model.recommend import recommend_playlist

while True:

    text = input("Enter mood: ")

    result = recommend_playlist(text)

    print("\nDetected Emotion:",
          result["emotion"])

    print("Recommended Playlists:")

    for playlist in result["playlists"]:
=======
from model.recommend import recommend_playlist

while True:

    text = input("Enter mood: ")

    result = recommend_playlist(text)

    print("\nDetected Emotion:",
          result["emotion"])

    print("Recommended Playlists:")

    for playlist in result["playlists"]:
>>>>>>> 236cf661cc88def0fa39c2dc0c47a7d964d8c411
        print("-", playlist)