pragma solidity >=0.4.21 <0.7.0;

contract Lottery {

    address public manager;

    address[] public players;

    constructor() public {
        manager = msg.sender;
    }
    
    function enter() public payable {
        require(msg.value > 0.01 ether);
        players.push(msg.sender);
    }
    
    function random() private view returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty,now,players)));
        
    }
    
    function pickWinner() public restricted {
        uint index = random() % players.length;
        address(players[index]).transfer(address(this).balance);
        players = new address[](0);
    }
    
    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    function getPlayers()public view returns(address[]){
        return players;
    }
    
}

