import random

# Initialize player positions
players = ["Player 1", "Player 2", "Player 3", "Player 4"]
positions = [0] * len(players)

# Define the Ludo board
board = [0] * 52  # The board has 52 positions (0-51)

# Define the winning position
winning_position = 51

# Function to roll a die
def roll_die():
    return random.randint(1, 6)

# Main game loop
while True:
    for i, player in enumerate(players):
        input(f"{player}, press Enter to roll the die.")
        roll = roll_die()
        print(f"{player} rolled a {roll}.")

        # Update the player's position
        positions[i] += roll

        # Check for ladder
        if positions[i] == 3:
            positions[i] = 22
        elif positions[i] == 5:
            positions[i] = 8
        # Add more ladder positions as needed

        # Check for snake
        elif positions[i] == 11:
            positions[i] = 7
        elif positions[i] == 17:
            positions[i] = 4
        # Add more snake positions as needed

        # Check for victory
        if positions[i] >= winning_position:
            print(f"{player} wins!")
            exit()

        # Display player's position
        print(f"{player} is now at position {positions[i]}.")
        input("Press Enter to continue to the next player.")
                                                
