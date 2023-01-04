The main function apartmentHunting(blocks, reqs) takes in two arguments:

blocks: an array of objects representing the blocks on a specific street. Each object has keys for various buildings, and the value for each key is a boolean indicating whether or not the building is present at that block.
reqs: an array of strings representing the required buildings.
The function returns an integer representing the index of the block that is most optimal for the person.

The function first calls the helper function findBestBlock(blocks, reqs), which iterates through the blocks and finds the index of the block that has the smallest farthest distance to a required building. The function does this by calling the helper function findFarthestDistance(blocks, reqs, currentBlock) for each block, passing in the list of blocks, the list of required buildings, and the index of the current block as arguments. findFarthestDistance(blocks, reqs, currentBlock) returns the farthest distance that the person would have to walk to reach any of the required buildings starting from the current block.

The helper function findFarthestDistance(blocks, reqs, currentBlock) uses the helper function findNearestDistance(blocks, req, currentBlock) to find the nearest distance to each required building. It calls findNearestDistance(blocks, req, currentBlock) for each required building, passing in the list of blocks, the current required building, and the index of the current block as arguments. findNearestDistance(blocks, req, currentBlock) returns the nearest distance to the required building req starting from the current block.

The helper function findNearestDistance(blocks, req, currentBlock) iterates through the blocks starting from the current block and moving towards the beginning and end of the array in alternating steps. It checks if the required building req is present at each block. If the required building is found, the function returns the distance from the current block to that block. If the required building is not found, the function continues iterating until the end of the array is reached. If the end of the array is reached, the function returns Infinity.

Overall, this program allows a person to find the index of the block that is most optimal for them based on a list of required buildings by minimizing the farthest distance they would have to walk to reach any of the required buildings.
