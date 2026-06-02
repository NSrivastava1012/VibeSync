from model.recommend import recommend_playlist

while True:

    text = input("Enter mood: ")

    result = recommend_playlist(text)

    print("\nDetected Emotion:",
          result["emotion"])

    print("Recommended Playlists:")

    for playlist in result["playlists"]:
        print("-", playlist)