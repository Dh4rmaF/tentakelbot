class Plugin{
    name = "Generic plugin";

    commands = {
        'help' :function(message){
            message.reply('I cannot help you. Yet. (its on my todo. !contribute if you want to help');
        },
        'contribute': function(message){
            message.channel.send("Contribute @ https://github.com/larsemil/tentakelbot");
        }
    }


    init(){
        console.log("Initializing " + this.name)
    }

    getCommands(){
        return this.commands;
    }

    run(command, message, params){
        if(command in this.commands){
            console.log("Running command " + command)
            this.commands[command](message, params);
            return true;
        }
        console.log("Could not run command " + command)
        return false;
    }

}
module.exports = Plugin;
