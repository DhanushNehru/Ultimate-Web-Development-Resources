import random

# Define the Uno card deck
colors = ["Red", "Green", "Blue", "Yellow"]
values = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Skip", "Reverse", "Draw Two"]
special_cards = ["Wild", "Wild Draw Four"]

deck = [(color, value) for color in colors for value in values]
deck += [(color, value) for color in colors for value in values]
deck += [(color, special) for color in colors for special in special_cards]

# Function to shuffle the Uno deck
def shuffle_deck():
    random.shuffle(deck)

# Function to deal cards to players
def deal_cards(num_players, num_cards):
    player_hands = [[] for _ in range(num_players)]
    for _ in range(num_cards):
        for player in range(num_players):
            card = deck.pop()
            player_hands[player].append(card)
    return player_hands

# Function to check if a card can be played
def can_play(card, top_card):
    color, value = card
    top_color, top_value = top_card
    return color == top_color or value == top_value

# Function to play a card
def play_card(player_hand, played_cards, card_index):
    card = player_hand.pop(card_index)
    played_cards.append(card)
    return card

# Function to simulate a basic Uno game
def uno_game(num_players):
    shuffle_deck()
    player_hands = deal_cards(num_players, num_cards=7)
    top_card = deck.pop()

    # Determine the initial player (e.g., the one with a matching card)
    current_player = 0
    for i, hand in enumerate(player_hands):
        if any(can_play(card, top_card) for card in hand):
            current_player = i
            break

    while True:
        player_hand = player_hands[current_player]

        print(f"Top card: {top_card[0]} {top_card[1]}")
        print(f"Player {current_player + 1}'s turn")

        print("Your hand:")
        for i, card in enumerate(player_hand):
            print(f"{i + 1}: {card[0]} {card[1]}")

        playable_indices = [i for i, card in enumerate(player_hand) if can_play(card, top_card)]

        if playable_indices:
            while True:
                card_index = int(input("Enter the number of the card you want to play: ")) - 1
                if card_index in playable_indices:
                    played_card = play_card(player_hand, played_cards, card_index)
                    top_card = played_card
                    if played_card[1] == "Reverse":
                        num_players = len(player_hands)
                        current_player = (current_player - 1) % num_players
                    elif played_card[1] == "Skip":
                        num_players = len(player_hands)
                        current_player = (current_player + 2) % num_players
                    elif played_card[1] == "Draw Two":
                        num_players = len(player_hands)
                        next_player = (current_player + 1) % num_players
                        player_hands[next_player].extend(deck.pop() for _ in range(2))
                    elif played_card[1] == "Wild Draw Four":
                        num_players = len(player_hands)
                        next_player = (current_player + 1) % num_players
                        player_hands[next_player].extend(deck.pop() for _ in range(4))
                    break
                else:
                    print("You can't play that card.")
        else:
            print("No playable cards. Drawing a card.")
            player_hand.append(deck.pop())

        if len(player_hand) == 0:
            print(f"Player {current_player + 1} wins!")
            break

        current_player = (current_player + 1) % num_players

# Start the Uno game with 3 players
num_players = 3
uno_game(num_players)
