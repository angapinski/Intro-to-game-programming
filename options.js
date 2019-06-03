var frameRate = 120;

var gravitySpeed = 100;
var baseSpeed = 250;
var gravityDelay = 500; //millsec
var objectSpeed = 120;
var baseTimeBetweenObstacles = 8; //seconds
var currentScoreMultiplier = 1;
var secondsBetweenScoreMultiplier = 7;
var scoreLevelMutlitplier = 1.5;
var obstacleSpeedMultiplier = 1.07;

characterPixelSize = 1024;

//Obstacle Settings
var gapMinHeight = 120;
var gapMaxHeight = 170;
var obstacleHeight = 25;
var obstacleScale = 25;
var obstacleWidth = 3;

//Character settings
var collisionBufferVertical = 20;
var collisionBufferHorizontal = 20;
var topBottomEdgeBuffer = 26;
var leftRightEdgeBuffer = 15;
var aliveImageScale = -.1;
var deadImageScale = -.141241379;

//Score Settings
var currentScore = 0;
var scoreBoxWidth = 5;
var scoreBoxHeight = 2;
var scoreBoxEdgeBuffer = 75;
var scoreBoxScaleX = 25;
var scoreBoxScaleY = 25;
var scoreTextBufferVertical = 60;
var scoreTextBufferHorizontal = 55;

//Death Message settings
var deathMessagePositionX = 0;
var deathMessagePositionY = 125;
var deathMessageScaleX = 3.5;
var deathMessageScaleY = -3.5;

var highScorePositionX = 0;
var highScorePositionY = -50;
var highScoreScalex = 2;
var highScoreScaley = -2;

//If we are using?
var explosionImageScale = -.5;


//Load Screen Settings
var loadMessagePositionX = 0;
var loadMessagePositionY = -75;
var loadScreenWaitTime = 2; //seconds
var loadBarWidth = 400;
var loadBarHeight = 40;
var loadBarScaleX = 1;
var loadBarScaleY = 1;


//Continue Message Settings
var continueMessageColor = 'white';
var continueMessageScaleX = 1;
var continueMessageScaleY = -1;
var edgeBuffer = 75;

//Menu Settings
var menuHeaderWidth = 0;
var menuHeaderHeight = 9;
var menuButtonWidth = 180;
var menuButtonHeight = 75;
var menuButtonBuffer = 30;

var titleScaleX = 2;
var titleScaleY = -2;


