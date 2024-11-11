create a 2d game for field hockey inspired from chess , where the playing field is divided into a matrix of 17 rows and 10 columns having total 170 values assigned sequentially from 1 to 170. 

please find the instructions to build the game in python code with file structure details having specific positions and movement for each player .
1. the playing field contains all positions excluding 1,2,3,11,12,13,21,22,23,8,9,10,18,19,20,28,29,30,141,142.143,151,152,153,161,162,163,148,149,150,158,159,160,168,169,170 . field will be highlighted with white bright border on outer side of valid matrix values.

Individual player details and positions on 2 matrix they can move for a ball.
1.Goalkeeper(GK) : valid spaces (4,5,6,7,14,15,16,17,24,25,26,27,34,35,36,37) : can be occupying only 8 places at a time out of 16 available spaces.
2. right Defender RD : legal space ( 31,32,33,34,41,42,43,44,51,52,53)  :default start position occupied at start of attack is 51,41,42,43 and shall retain this shape for all legal movement and cover only 3 places legally and 1 postion is foul.
3.left defender LD :follows the mirrored functionality of left defender having valid space as 37,38,39,40,47,28,29,50,58,59,60. during attack by defaut occupies 48,49,50,60 and retails the L shape always.
4. Centrehalf CH : this is the most powerfull player with ability to pass to all players in the field by using special instructions. valid space :44,45,46,47,54,55,56,57,64,65,66,67,74,75,76,77 , with this player occupying 6 positions at any time ,5 of them legal 1 leftmost box causing foul , for attach the player starts from position 44,45,46,47,55,56
5. right half RH : legal place  in matrix 61,62,63,71,72,73,81,82,83,91,92,93 and can occupy only 3 legal space at any time. attack starts from default position 72,82,92
6. left half LH : legal positions: 68,69,70,78,79,80,88,89,90 , default postition 79,89,99 , Both left half and right half can move one postion up down sideways 1 step any side .
7.right out RO: valida spaces 101,102,103,104,111,112,113,121,122,123,131,132,133 default attack postion 111,122,133  will have 3 leagl boxes covered one after other in any direction.
8.left out LO: valid postion: 107,108,109,110,118,119,120,128,129,130,138,139,140 Default attack position 138,129,120
9.right in RI: valid position 73,74,75,76,83,84,85,86,93,94,95,96 and player occupies 3 valid position 2 are valid and 1 postion is foul randomly. default postion: 74,84,94
10. left in LI: valid position  75,76,77,78,85,86,87,88,95,96,97,98,105,106,107,108 and 3 postions coverd at all time . default position: 76,86,96
11. Centre forward CF : valid postions is 104,105,106,107,116,117,118,119,124,125,126,127
default position during attack start: 106,115,116


The field will be divided into box or matrix as defined above. the main objective of the game is to score goal between the position 144,145,146,147,154,155,156,157,164,165,166,167 for home team  during quarter (1 &2) or Half (1) and  4,5,6,7,14,15,16,17,24,25,26,27 for away team B during the same quarter /half.

the opposite team B consist of same 11 players with similar position and rules just from opposite side of the matrix.

match shall start with a toss option called between captains of 2 team, showing the animation of asking the home player if he wants head or tails and then give the result based on random probability. Once toss is done the visual should shift to 2d images of players moving into the field and occupy a position with 4 boxes before the start of the match. and only goalkeeper occupying 6 positions as per the hockey field. Highlight the border of valid field with white border line and unoccupied area outside the field is blue in colour.

the team that wins the toss will start the match. the side for home and away changes randomly based on sum of seconds at the time of toss being odd gets home side and being even gets the away side.

there is one refree occupying 1 box of space who shall be always 3 or 4 boxes/places away from the ball.

the ball is the important object in this game which decides the points for a team. It shall always begin from the centre between position 85 and 86, Create a touch button/click to start the match, with centre forward of attacking team pushing the ball from centre to centre half behind , the ball takes 0.5 seconds to pass each position from initaial start. 

at start of the game a control is assigned to centre forward, which shifts to the near team mate to whom the ball is passed. in case the control has to be changed to the player required , special key S toggles the control between the most nearest player facing the ball at every click/press.

each player has the option to pass ball to nearest team player using the keys q,w,e for back 3 direction and a,d for sideways pass and z,x,c for forward directional pass. The ability to pass the ball to team player depends upon the avaliable valid square and directional player available. 

for example left half can only pass back with w, q to CH, a to RH ,z to RI ,x to RO , all other key will not get any valid team player and ball will go out of bound. Once the ball has gone out of the border, umpire whistles as per normal hockey and football rule for opposite side to start based on last touch on ball.

have a counter created for each player where the counter stores value  based on sum of seconds of current time being prime when the player recieves the ball.

Player can traver from one position to another in 1 second and the ball also moves with same speed when a player is moving with the ball.

each player has to decide to pass the ball everytime before the opponent player reaches the position where ball is present before ball is passes. 

during a pass made from one player to another , if there is a player from opponent team already in the postion where the pass is made, the attack turns over to opposite team and all the players will move behind to the last allowed legal position to save a goal. 

a goal can be scored by players of team A only when they can shoot the ball from position 114,115,116,117,123,124,125,126,127,128,133,134,135,136,137,138. when the player is trying to strike a goal , only when a defender and goalkeeper is presnt , should find the blank spot not occupied by opponent player , before the ball reaches the target.

the team should be represent by 2 colour for shirt and short and hockey stick occupying one postion at a time.

team B having contrasting color and the goalkeeper colour should be differtnt from team color and umpire.

one side of the field has bench for 5 extra player who keeps changing randomly based on  time. The total duration of game shall be 200 seconds with each quarter having 45 seconds of game and 5 seconds of break, following same pattern for 4 quarter. In case of halves, each half consist of 90 seconds followed by 10 second break.

create a details code , file strtucture required and algorith for the explained game.
