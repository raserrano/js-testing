# Javascript testing journey

In this project I will start to go through the different frameworks and testing tools to experience and share the knowledge that I will be also getting through this journey.

There are a few things that I would really like to start sharing. First of all, I sam trying to make everything from scratch and while this might not be the best approach for real life projects I intend this to do it as a way to slowly learn and leverage my knowledge on testing tools in Javascript specially aiming NodeJS. Another important aspect of this project is to demonstrate knowledge that is usually hard to share if you are not able to submit code to a public repository. Hopefully this will be interesting for readers and even some might find it useful.

I am also assuming no previous knowledge in the tools that I will be using and the experience and knowledge should be a good starting point for those following me in this journey as those that would like to start learning new skills.

## Tools being used
Without even realizing how hard getting started for someone without knowledge I am going to list the current set of technologies and tools I'm currently using.

### Simple
- Vim editor 
- Git
- NodeJS/Javascript
- Npm 
- N

I started this journey by basically creating a git repository. Given that most of the time the repository is already created for us I expect it to be something that not many have had the opportunity to do on their own. I created the repository by simple executing the following command
>`git init`

![Selection_001.png](https://ipfs.busy.org/ipfs/QmZVUscxmVXeXdhDgVnUM3w7cRK7SG7Dm22jGkg9yi48Sx)

Obviously I already have git installed in the system. I will not cover git installation this time but I think I might create a docker container somewhere along the journey to provide a testing environment and also introduce the containerized topic. 

#### Using a git storing service
Its not my intention to favor any service over the other but for this education project I will probably start by pushing my changes into GitHub. For now this should be an easy way to show how to handle a remote repository. I will later add another option so we could possibly host the same code in 2 different services just for the sake of testing and curiosity. In my work life I have had the opportunity to switch from one service to another and so I would like to share this knowledge with you all. 

![Selection_002.png](https://ipfs.busy.org/ipfs/QmWGA7oGkskQrWGKuaUFCQdCTWq8Wz1cQ5xwfc92h5VWK3)
Simply add the remote reference once you have managed to get the repository reference in a service.

![Selection_003.png](https://ipfs.busy.org/ipfs/QmQ9pXrzVx3twpDgR962RiaVWJsoVg7ERVfM8VWECKWdCm)
Pushing will just send everything that you have and start tracking. I like to point out that this first push will fail (same is you start by creating a local branch) because there is not a reference for that branch in the remote repository, so by setting it to set the upstream and if you use the *matching* option in the git config you should be able to create a remote branch that follows your changes in the local branch and viceversa. Simply, let the sync happen easier.

![Selection_004.png](https://ipfs.busy.org/ipfs/QmVpKKM62DvdLCeEKuiKZxvj98vSJsC1QrFoyM1beeNwng)

The final result and command output should be something very similar as the image above, ideally you were able to push your changes using your credentials and also you managed to see the changes in the git hosting service.
