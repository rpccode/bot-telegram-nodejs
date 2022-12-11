import { Telegraf } from 'telegraf';
import {message} from 'telegraf/filters'

const bot = new Telegraf("5926816130:AAF0YddnlJ64rj4OxpX3VtT-0BNIA_TtN5A");


bot.start( ctx => {
    ctx.reply("welcome")
})
bot.help( ctx => {
    ctx.reply("welcome")
})
bot.settings( ctx => {
    ctx.reply("setting")
})
bot.command(["info","INFO","Info"], ctx => {
    ctx.reply("welcome")
})

bot.hears(["info"], ctx =>{
    ctx.reply("la informacion que nececita...... ")
})
bot.command('quit', async (ctx) => {
    // Explicit usage
    await ctx.telegram.leaveChat(ctx.message.chat.id);
  
    // Using context shortcut
    await ctx.leaveChat();
  });

bot.on(message('text'), async (ctx) => {
    // Explicit usage
    await ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.from.first_name +' '+ctx.from.last_name }`);
  
    // Using context shortcut
    // await ctx.reply(`Hello ${ctx.state.role}`);
  });



bot.launch()