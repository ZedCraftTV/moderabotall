const Discord = require('discord.js');
const client = new Discord.Client();
prefix = "h!";

function cmd(str, msg) {
  return msg.content.toLowerCase().startsWith(prefix + str);
  }

client.on('ready', () => {
  client.user.setGame('EF ALL h!help')
  console.log(`Connecté au Compte ${client.user.tag}!`);
});

client.login("NDM5NzYwOTIxMDA3NDg5MDI0.DdM0Iw.71ZuUfoWPN9ufJyIsF3357dhzQc");

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

		if message.content === prefix + "hhelp"){
				var embed = new Discord.RichEmbed()
					.setTitle("AIDE")
					.setDescription("Liste des commandes disponibles")
					.addField(".help","page d'aide",true)
					.addField("Test","test 1 1 1 1 1:D c un test [lien du modera ahbibi](https://moderabot.jimdosite.com/)", true)
				.setColor("0x0000ff")
				.setFooter("je bz ta mere pd")
				message.channel.sendEmbed(embed);
			}
        

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




            
            
        // Commande pour Poster son Avatar.
        client.on('message', message => {
            if (message.content === 'h!avatar') {
              message.reply(message.author.avatarURL);
            }
          })










        

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
			
	
		
      
