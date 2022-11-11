const env = require('../.env')

const { Telegraf, Markup } = require('telegraf')

const bot = new Telegraf(env.token)


bot.start(async ctx => {
  const from = ctx.update.message.from
  if (from.id !=  '1450408708') {
    ctx.reply(
      `Saia daqui ${from.first_name}. Você não é a Luiza nem o professor Emerson!`
    )
  } else {
  await ctx.reply(`Seja bem vindo ${from.first_name}!
                   Sou um bot criado por Luiza Lorenço, para a matéria de Sistemas de Apoio a Decisão.
                  
                  Minha funcionalidade mais legal é te dar informações sobre a copa do mundo! Você pode ver datas de jogos da copa de 2022 e várias informações sobre as copas anteriores!
                  Maaaaas, se você não está animado para a copa, pode apenas tentar conversar comigo!
                  
                  Por favor, use o teclado abaixo para me dizer o que você quer fazer, e assim te darei mais informações sobre mim!`)
  await ctx.reply(
    'Então, sobre o que vamos falar?',
    Markup.keyboard(['Copa', 'Conversar']).resize().oneTime()
  )
}})

bot.hears(['Copa'], async ctx => {
  await ctx.reply(`Legal! Vou te contar tudo o que posso fazer relacionado a ${ctx.match}
                   
                 - Você pode me enviar um emoji da bandeira de algum país que está na copa de 2022, e eu te direi as datas dos jogos dele!
                 - Se quer saber a sede de alguma copa, pode me enviar a palavra "sede" junto do ano, por exemplo "sede 2014" (lembre-se que a primeira copa foi em 1930)
                 - Se quer saber sobre os mascotes, basta enviar "mascote" e o ano, por exemplo "mascote 2002" (lembre-se que os mascotes existem desde 1966)
                 - Se quer saber o campeão de alguma copa, basta me enviar "campeão" e o ano, por exemplo "campeão 2010"
                 - Caso queira ver o trailer da copa de 2022, basta me enviar a palavra "trailer"
                 - Para informações sobre o álbum, me envie "álbum"
                 
                 Espero que goste! Agora pode começar e me pedir algo!
                 Por favor, tente escrever corretamente quando falar comigo, eu não entendo algumas palavras sem acentuação :("`)
})

bot.hears(['Conversar'], async ctx => {
  await ctx.reply(`Ok, você quer apenas ${ctx.match}!
                   
                 - Pode me enviar: fotos, vídeos, aúdios, stickers, contatos ou sua localização! Eu responderei tudo! :)
                 
                 Espero que goste! Agora pode me enviar algo"`)
})

bot.hears('🇶🇦', ctx => {
  ctx.reply(`Jogos do Qatar na fase de grupos:
                1- Dia 20/11 (domingo) as 13:00 teremos Qatar x Equador
                2- Dia 25/11 (sexta) as 10:00 teremos Qatar x Senegal
                3- Dia 29/11 (terça) as 12:00 teremos Qatar x Holanda`)
})

bot.hears('🇪🇨', ctx => {
  ctx.reply(`Jogos do Equador na fase de grupos:
                1- Dia 20/11 (domingo) as 13:00 teremos Equador X Qatar
                2- Dia 25/11 (sexta) as 13:00 teremos Equador x Holanda
                3- Dia 29/11 (terça) as 12:00 teremos Equador x Senegal`)
})

bot.hears('🇳🇱', ctx => {
  ctx.reply(`Jogos da Holanda na fase de grupos:
                1- Dia 21/11 (segunda) as 13:00 teremos Holanda x Senegal
                2- Dia 25/11 (sexta) as 13:00 teremos Holanda x Equador
                3- Dia 29/11 (terça) as 12:00 teremos Holanda x Qatar`)
})

bot.hears('🇸🇳', ctx => {
  ctx.reply(`Jogos do Senegal na fase de grupos:
                1- Dia 20/11 (domingo) as 13:00 teremos Senegal x Holanda
                2- Dia 25/11 (sexta) as 10:00 teremos Senegal x Qatar
                3- Dia 29/11 (terça) as 12:00 teremos Senegal x Equador`)
})

bot.hears('🇺🇸', ctx => {
  ctx.reply(`Jogos dos Estados Unidos na fase de grupos:
                1- Dia 21/11 (segunda) as 16:00 teremos Estados Unidos x Gales
                2- Dia 25/11 (sexta) as 16:00 teremos Estados Unidos x Inglaterra
                3- Dia 29/11 (terça) as 16:00 teremos Estados Unidos x Irã`)
})

bot.hears('🏴󠁧󠁢󠁥󠁮󠁧󠁿', ctx => {
  ctx.reply(`Jogos da Inglaterra na fase de grupos:
                1- Dia 21/11 (segunda) as 10:00 teremos Inglaterra x Irã
                2- Dia 25/11 (sexta) as 16:00 teremos Inglaterra x Estados Unidos 
                3- Dia 29/11 (terça) as 16:00 teremos Inglaterra x Gales`)
})

bot.hears('🇮🇷', ctx => {
  ctx.reply(`Jogos do Irã na fase de grupos:
                1- Dia 21/11 (segunda) as 10:00 teremos Irã x Inglaterra
                2- Dia 25/11 (sexta) as 7:00 teremos Irã x País de Gales
                3- Dia 29/11 (terça) as 16:00 teremos Irã x Estados Unidos`)
})

bot.hears('🏴󠁧󠁢󠁷󠁬󠁳󠁿', ctx => {
  ctx.reply(`Jogos do País de Gales na fase de grupos:
                1- Dia 21/11 (segunda) as 16:00 teremos Gales x Estados Unidos
                2- Dia 25/11 (sexta) as 7:00 teremos Gales x Irã
                3- Dia 29/11 (terça) as 16:00 teremos Gales x Inglaterra`)
})

bot.hears('🇦🇷', ctx => {
  ctx.reply(`Jogos da Argentina na fase de grupos:
                1- Dia 22/12 (sexta) as 7:00 teremos Argentina x Arabia Saudita
                2- Dia 26/11 (sábado) as 16:00 teremos Argentina x México
                3- Dia 30/11 (quarta) as 16:00 teremos Argentina x Polonia`)
})

bot.hears('🇸🇦', ctx => {
   ctx.reply(`Jogos da Arabia Saudita na fase de grupos:
                1- Dia 22/12 (sexta) as 13:00 teremos Arabia Saudita x Argentina
                2- Dia 26/11 (sábado) as 10:00 teremos Arabia Saudita x Polonia
                3- Dia 30/11 (quarta) as 16:00 teremos Arabia Saudita x México`)
})

bot.hears('🇲🇽', ctx => {
  ctx.reply(`Jogos do México na fase de grupos:
                1- Dia 22/12 (sexta) as 13:00 teremos México x Polonia
                2- Dia 26/11 (sábado) as 16:00 teremos México x Argentina
                3- Dia 30/11 (quarta) as 16:00 teremos México x Arabia Saudita`)
})

bot.hears('🇵🇱', ctx => {
   ctx.reply(`Jogos da Polonia na fase de grupos:
                1- Dia 22/12 (sexta) as 13:00 teremos Polonia x México
                2- Dia 26/11 (sábado) as 10:00 teremos Polonia x Arabia Saudita
                3- Dia 30/11 (quarta) as 16:00 teremos Polonia x Argentina`)
}) 

bot.hears('🇦🇺', ctx => {
  ctx.reply(`Jogos da Austrália na fase de grupos:
                1- Dia 22/12 (sexta) as 16:00 teremos Austrália x França
                2- Dia 26/11 (sábado) as 7:00 teremos Austrália x Tunísia
                3- Dia 30/11 (quarta) as 12:00 teremos Austrália x Dinamarca`)
})

bot.hears('🇩🇰', ctx => {
  ctx.reply(`Jogos da Dinamarca na fase de grupos:
                1- Dia 22/12 (sexta) as 10:00 teremos Dinamarca x Tunísia 
                2- Dia 26/11 (sábado) as 13:00 teremos Dinamarca x França
                3- Dia 30/11 (quarta) as 12:00 teremos Dinamarca x Austrália`)
})

bot.hears('🇫🇷', ctx => {
   ctx.reply(`Jogos da França na fase de grupos:
                1- Dia 22/12 (sexta) as 16:00 teremos França x Austrália
                2- Dia 26/11 (sábado) as 13:00 teremos França x Dinamarca
                3- Dia 30/11 (quarta) as 12:00 teremos França x Tunísia`)
})

bot.hears('🇹🇳', ctx => {
  ctx.reply(`Jogos da Tunísia na fase de grupos:
                1- Dia 22/12 (sexta) as 10:00 teremos Tunísia x Dinamarca
                2- Dia 26/11 (sábado) as 7:00 teremos Tunísia x Austrália
                3- Dia 30/11 (quarta) as 12:00 teremos Tunísia x França`)
})

bot.hears('🇩🇪', ctx => {
  ctx.reply(`Jogos da Alemanha na fase de grupos:
                1- Dia 23/11 (quarta) as 10:00 teremos Alemanha x Japão 
                2- Dia 27/11 (domingo) as 16:00 teremos Alemanha x Espanha
                3- Dia 1/12 (quinta) as 16:00 teremos Alemanha x Costa Rica`)
})

bot.hears('🇨🇷', ctx => {
   ctx.reply(`Jogos da Costa Rica na fase de grupos:
                1- Dia 23/11 (quarta) as 13:00 teremos Costa Rica x Espanha
                2- Dia 27/11 (domingo) as 7:00 teremos Costa Rica x Japão
                3- Dia 1/12 (quinta) as 16:00 teremos Costa Rica x Alemanha`)
})

bot.hears('🇪🇸', ctx => {
  ctx.reply(`Jogos da Espanha na fase de grupos:
                1- Dia 23/11 (quarta) as 13:00 teremos Espanha x Costa Rica 
                2- Dia 27/11 (domingo) as 16:00 teremos Espanha x Alemanha
                3- Dia 1/12 (quinta) as 16:00 teremos Espanha x Japão`)
})

bot.hears('🇯🇵', ctx => {
  ctx.reply(`Jogos do Japão na fase de grupos:
                1- Dia 23/11 (quarta) as 10:00 teremos Japão x Alemanha
                2- Dia 27/11 (domingo) as 7:00 teremos Japão x Costa Rica
                3- Dia 1/12 (quinta) as 16:00 teremos Japão x Espanha`)
})

bot.hears('🇧🇪', ctx => {
  ctx.reply(`Jogos da Bélgica na fase de grupos:
                1- Dia 23/11 (quarta) as 16:00 teremos Bélgica x Canadá
                2- Dia 27/11 (domingo) as 10:00 teremos Bélgica x Marrocos
                3- Dia 1/12 (quinta) as 12:00 teremos Bélgica x Croácia`)
})

bot.hears('🇨🇦', ctx => {
ctx.reply(`Jogos do Canadá na fase de grupos:
                1- Dia 23/11 (quarta) as 16:00 teremos Canadá x Bélgica
                2- Dia 27/11 (domingo) as 13:00 teremos Canadá x Croácia
                3- Dia 1/12 (quinta) as 12:00 teremos Canadá x Marrocos`)
})

bot.hears('🇭🇷', ctx => {
ctx.reply(`Jogos da Croácia na fase de grupos:
                1- Dia 23/11 (quarta) as 7:00 teremos Croácia x Marrocos
                2- Dia 27/11 (domingo) as 13:00 teremos Croácia x Canadá
                3- Dia 1/12 (quinta) as 12:00 teremos Croácia x Bélgica`)
})

bot.hears('🇲🇦', ctx => {
ctx.reply(`Jogos do Marrocos na fase de grupos:
                1- Dia 23/11 (quarta) as 7:00 teremos Marrocos x Croácia
                2- Dia 27/11 (domingo) as 10:00 teremos Marrocos x Bélgica
                3- Dia 1/12 (quinta) as 12:00 teremos Marrocos x Canadá`)
})

bot.hears('🇧🇷', ctx => {
ctx.reply(`Jogos do Brasil na fase de grupos:
                1- Dia 24/11 (quinta) as 16:00 teremos Brasil x Sérvia
                2- Dia 28/11 (segunda) as 13:00 teremos Brasil x Suiça
                3- Dia 2/12 (sexta) as 16:00 teremos Brasil x Camarões`)
})

bot.hears('🇨🇲', ctx => {
ctx.reply(`Jogos do Camarões na fase de grupos:
                1- Dia 24/11 (quinta) as 7:00 teremos Camarões x Suiça
                2- Dia 28/11 (segunda) as 7:00 teremos Camarões x Sérvia
                3- Dia 2/12 (sexta) as 16:00 teremos Camarões x Brasil`)
})

bot.hears('🇨🇭', ctx => {
ctx.reply(`Jogos da Suiça na fase de grupos:
                1- Dia 24/11 (quinta) as 16:00 teremos Suiça x Camarões
                2- Dia 28/11 (segunda) as 13:00 teremos Suiça x Brasil
                3- Dia 2/12 (sexta) as 16:00 teremos Suiça x Sérvia`)
})

bot.hears('🇷🇸', ctx => {
ctx.reply(`Jogos da Sérvia na fase de grupos:
                1- Dia 24/11 (quinta) as 16:00 teremos Sérvia x Brasil
                2- Dia 28/11 (segunda) as 7:00 teremos Sérvia x Camarões
                3- Dia 2/12 (sexta) as 16:00 teremos Sérvia x Suiça`)
})

bot.hears('🇰🇷', ctx => {
ctx.reply(`Jogos da Coréia na fase de grupos:
                1- Dia 24/11 (quinta) as 10:00 teremos Coréia x Uruguai
                2- Dia 28/11 (segunda) as 10:00 teremos Coréia x Gana
                3- Dia 2/12 (sexta) as 12:00 teremos Coréia x Portugal`)
})

bot.hears('🇬🇭', ctx => {
ctx.reply(`Jogos de Gana na fase de grupos:
                1- Dia 24/11 (quinta) as 13:00 teremos Gana x Portugal
                2- Dia 28/11 (segunda) as 10:00 teremos Gana x Coréia
                3- Dia 2/12 (sexta) as 12:00 teremos Gana x Uruguai`)
})

bot.hears('🇵🇹', ctx => {
ctx.reply(`Jogos de Portugal na fase de grupos:
                1- Dia 24/11 (quinta) as 13:00 teremos Portugal x Gana
                2- Dia 28/11 (segunda) as 16:00 teremos Portugal x Uruguai
                '3- Dia 2/12 (sexta) as 12:00 teremos Portugal x Coréia`)
})

bot.hears('🇺🇾', ctx => {
ctx.reply(`Jogos do Uruguai na fase de grupos:'
 1- Dia 24/11 (quinta) as 10:00 teremos Uruguai x Coréia 
 2- Dia 28/11 (segunda) as 16:00 teremos Uruguai x Portugal 
 3- Dia 2/12 (sexta) as 12:00 teremos Uruguai x Gana`)
})

bot.hears(['trailer', 'TRAILER', 'Trailer'], ctx => {
  ctx.replyWithMarkdownV2(
      '*Para ver o trailer da copa do mundo 2022*' +
      ' [clique aqui](https://youtu.be/52TCFVqAKZE)'
  )
})

bot.hears(['álbum', 'Álbum', 'ÁLBUM', 'album', 'Album', 'ALBUM'], ctx => {
ctx.replyWithHTML(`
Aqui estão algumas informações sobre o álbum da copa 
<b>Os pacotinhos com 5 figurinhas custam 4 reais</b>
<i>O álbum de capa comum custa 12 reais</i> 
<a href="https://panini.com.br/cromos-faltantes-copa-do-mundo-2022-fifa-world-cup-qatar-2022tm">
 Pode pedir as figurinhas que faltam aqui, no site oficial da Panini
</a>`)
})

bot.hears(['mascote 1966', 'Mascote 1966', 'MASCOTE 1966'], ctx => {
  ctx.replyWithPhoto(
      'https://i.pinimg.com/originals/46/7f/20/467f207a7b47b7c032bf3dacd8e55306.png' , {
     caption: '1966: World Cup Willie'
  })
  })  

  bot.hears(['mascote 1970', 'Mascote 1970', 'MASCOTE 1970'], ctx => {
    ctx.replyWithPhoto(
        'https://video-images.vice.com/_uncategorized/1530041233210-a7bb94c5cef9e1d62a2ef781c7113a9f.jpeg' , {
       caption: '1970: Juanito Maravilla'
    })
    }) 
   
  bot.hears(['mascote 1974', 'Mascote 1974', 'MASCOTE 1974'], ctx => {
    ctx.replyWithPhoto(
        'https://i.pinimg.com/originals/9c/5d/b4/9c5db435a425a7671142a8f68eca84b1.jpg' , {
       caption: '1974: Tip e Tap'
    })
    }) 
   
  bot.hears(['mascote 1978', 'Mascote 1978', 'MASCOTE 1978'], ctx => {
    ctx.replyWithPhoto(
        'https://i.pinimg.com/originals/89/a6/45/89a6453aff48e66aece14046e59218ea.png' , {
       caption: '1978: Gauchito'
    })
    }) 
   
  bot.hears(['mascote 1982', 'Mascote 1982', 'MASCOTE 1982'], ctx => {
    ctx.replyWithPhoto(
        'http://s2.glbimg.com/t4QEtLhxPBpOw_AEN5O5uB_XXv4=/73x0:856x600/300x230/s.glbimg.com/es/ge/f/original/2013/12/04/naranjito-copa82-rep.jpg' , {
       caption: '1982: Naranjito'
    })
    }) 
   
  bot.hears(['mascote 1986', 'Mascote 1986', 'MASCOTE 1986'], ctx => {
    ctx.replyWithPhoto(
        'https://carolcoxinhas.com.br/wp-content/uploads/2018/09/download.png' , {
       caption: '1986: Pique'
    })
    }) 
   
  bot.hears(['mascote 1990', 'Mascote 1990', 'MASCOTE 1990'], ctx => {
    ctx.replyWithPhoto(
        'https://carolcoxinhas.com.br/wp-content/uploads/2018/09/Ciao-final-600x720.png' , {
       caption: '1990: Ciao'
    })
    }) 
   
  bot.hears(['mascote 1994', 'Mascote 1994', 'MASCOTE 1994'], ctx => {
    ctx.replyWithPhoto(
        'https://perspectivabr.files.wordpress.com/2018/05/striker-1994-3.jpg' , {
       caption: '1994: Striker'
    })
    }) 
  bot.hears(['mascote 1998', 'Mascote 1998', 'MASCOTE 1998'], ctx => {
    ctx.replyWithPhoto(
        'https://carolcoxinhas.com.br/wp-content/uploads/2018/09/footix-franca-copa-98-600x711.jpg' , {
       caption: '1998: Footix'
    })
    }) 
   
  bot.hears(['mascote 2002', 'Mascote 2002', 'MASCOTE 2002'], ctx => {
    ctx.replyWithPhoto(
        'https://i.pinimg.com/originals/c6/0d/ce/c60dce7a0b4f56a33d75df9f6e2434e3.png' , {
       caption: '2002: Kaz, Ato e Nik'
    })
    }) 
   
  bot.hears(['mascote 2006', 'Mascote 2006', 'MASCOTE 2006'], ctx => {
    ctx.replyWithPhoto(
        'https://carolcoxinhas.com.br/wp-content/uploads/2018/09/images.jpg' , {
       caption: '2006: Goleo VI'
    })
    }) 
   
  bot.hears(['mascote 2010', 'Mascote 2010', 'MASCOTE 2010'], ctx => {
    ctx.replyWithPhoto(
        'https://copa.imguol.com/2010/a-copa/zakumi-mascote-copa-africa-do-sul-2010.jpg' , {
       caption: '2010: Zakumi'
    })
    }) 
   
  bot.hears(['mascote 2014', 'Mascote 2014', 'MASCOTE 2014'], ctx => {
    ctx.replyWithPhoto(
        'http://conteudo.imguol.com.br/2012/12/14/tatu-bola-mascote-da-copa-1352910294857_300x300.jpg' , {
       caption: '2014: Fuleco'
    })
    }) 
   
  bot.hears(['mascote 2018', 'Mascote 2018', 'MASCOTE 2018'], ctx => {
    ctx.replyWithPhoto(
        'https://chc.org.br/wp-content/uploads/2018/07/mascote_copa.jpg' , {
       caption: '2018: Zabivaka'
    })
    }) 
   
  bot.hears(['mascote 2022', 'Mascote 2022', 'MASCOTE 2022'], ctx => {
    ctx.replyWithPhoto(
        'https://http2.mlstatic.com/D_NQ_NP_615583-MLB51795837568_102022-O.jpg' , {
       caption: '2022: Laeeb'
    })
    }) 

    bot.hears(['campeão 1930', 'Campeão 1930', 'CAMPEÃO 1930'], ctx => {
      ctx.reply('Uruguai')
    })
    
    bot.hears(['campeão 1934', 'Campeão 1934', 'CAMPEÃO 1934'], ctx => {
      ctx.reply('Itália')
    })
    
    bot.hears(['campeão 1938', 'Campeão 1938', 'CAMPEÃO 1938'], ctx => {
      ctx.reply('Itália')
    })
    
    bot.hears(['campeão 1950', 'Campeão 1950', 'CAMPEÃO 1950'], ctx => {
      ctx.reply('Uruguai')
    })
    
    bot.hears(['campeão 1954', 'Campeão 1954', 'CAMPEÃO 1954'], ctx => {
      ctx.reply('Alemanha Ocidental')
    })
    
    bot.hears(['campeão 1958', 'Campeão 1958', 'CAMPEÃO 1958'], ctx => {
      ctx.reply('Brasil')
    })
    
    bot.hears(['campeão 1962', 'Campeão 1962', 'CAMPEÃO 1962'], ctx => {
      ctx.reply('Brasili')
    })
    
    bot.hears(['campeão 1966', 'Campeão 1966', 'CAMPEÃO 1966'], ctx => {
      ctx.reply('Inglaterra')
    })
    
    bot.hears(['campeão 1970', 'Campeão 1970', 'CAMPEÃO 1970'], ctx => {
      ctx.reply('Brasil')
    })
    
    bot.hears(['campeão 1974', 'Campeão 1974', 'CAMPEÃO 1974'], ctx => {
      ctx.reply('Alemanha Ocidental')
    })
    
    bot.hears(['campeão 1978', 'Campeão 1978', 'CAMPEÃO 1978'], ctx => {
      ctx.reply('Argentina')
    })
    
    bot.hears(['campeão 1982', 'Campeão 1982', 'CAMPEÃO 1982'], ctx => {
      ctx.reply('Itália')
    })
    
    bot.hears(['campeão 1986', 'Campeão 1986', 'CAMPEÃO 1986'], ctx => {
      ctx.reply('Argentina')
    })
    
    bot.hears(['campeão 1990', 'Campeão 1990', 'CAMPEÃO 1990'], ctx => {
      ctx.reply('Alemanha Ocidental')
    })
    
    bot.hears(['campeão 1994', 'Campeão 1994', 'CAMPEÃO 1994'], ctx => {
      ctx.reply('Brasil')
    })
    
    bot.hears(['campeão 1998', 'Campeão 1998', 'CAMPEÃO 1998'], ctx => {
      ctx.reply('França')
    })
    
    bot.hears(['campeão 2002', 'Campeão 2002', 'CAMPEÃO 2002'], ctx => {
      ctx.reply('Brasil')
    })
    
    bot.hears(['campeão 2006', 'Campeão 2006', 'CAMPEÃO 2006'], ctx => {
      ctx.reply('ltália')
    })
    
    bot.hears(['campeão 2010', 'Campeão 2010', 'CAMPEÃO 2010'], ctx => {
      ctx.reply('Espanha')
    })
    
    bot.hears(['campeão 2014', 'Campeão 2014', 'CAMPEÃO 2014'], ctx => {
      ctx.reply('Alemanha')
    })
    
    bot.hears(['campeão 2018', 'Campeão 2018', 'CAMPEÃO 2018'], ctx => {
      ctx.reply('França')
    })
    
    bot.hears(['sede 1930', 'Sede 1930', 'SEDE 1930'], ctx => {
      ctx.reply('Uruguai')
    })
    
    bot.hears(['sede 1934', 'Sede 1934', 'SEDE 1934'], ctx => {
      ctx.reply('Itália')
    })
    
    bot.hears(['sede 1938', 'Sede 1938', 'SEDE 1938'], ctx => {
      ctx.reply('França')
    })
    
    bot.hears(['sede 1950', 'Sede 1950', 'SEDE 1950'], ctx => {
      ctx.reply('Brasil')
    })
    
    bot.hears(['sede 1954', 'Sede 1954', 'SEDE 1954'], ctx => {
      ctx.reply('Suiça')
    })
    
    bot.hears(['sede 1958', 'Sede 1958', 'SEDE 1958'], ctx => {
      ctx.reply('Suécia')
    })
    
    bot.hears(['sede 1962', 'Sede 1962', 'SEDE 1962'], ctx => {
      ctx.reply('Chile')
    })
    
    bot.hears(['sede 1966', 'Sede 1966', 'SEDE 1966'], ctx => {
      ctx.reply('Inglaterra')
    })
    
    bot.hears(['sede 1970', 'Sede 1970', 'SEDE 1970'], ctx => {
      ctx.reply('México')
    })
    
    bot.hears(['sede 1974', 'Sede 1974', 'SEDE 1974'], ctx => {
      ctx.reply('Alemanha Ocidental')
    })
    
    bot.hears(['sede 1978', 'Sede 1978', 'SEDE 1978'], ctx => {
      ctx.reply('Argentina')
    })
    
    bot.hears(['sede 1982', 'Sede 1982', 'SEDE 1982'], ctx => {
      ctx.reply('Itália')
    })
    
    bot.hears(['sede 1986', 'Sede 1986', 'SEDE 1986'], ctx => {
      ctx.reply('México')
    })
    
    bot.hears(['sede 1990', 'Sede 1990', 'SEDE 1990'], ctx => {
      ctx.reply('Itália')
    })
    
    bot.hears(['sede 1994', 'Sede 1994', 'SEDE 1994'], ctx => {
      ctx.reply('Estados Unidos')
    })
    
    bot.hears(['sede 1998', 'Sede 1998', 'SEDE 1998'], ctx => {
      ctx.reply('França')
    })
    
    bot.hears(['sede 2002', 'Sede 2002', 'SEDE 2002'], ctx => {
      ctx.reply('Coréia do Sul e Japão')
    })
    
    bot.hears(['sede 2006', 'Sede 2006', 'SEDE 2006'], ctx => {
      ctx.reply('Alemanha')
    })
    
    bot.hears(['sede 2010', 'Sede 2010', 'SEDE 2010'], ctx => {
      ctx.reply('África do Sul')
    })
    
    bot.hears(['sede 2014', 'Sede 2014', 'SEDE 2014'], ctx => {
      ctx.reply('Brasil')
    })
    
    bot.hears(['sede 2018', 'Sede 2018', 'SEDE 2018'], ctx => {
      ctx.reply('Rússia')
    })
    
  

bot.on('text', async (ctx, next) => {
  await ctx.reply('Acho que você me pediu algo que eu não sei... Se estamos falando sobre a copa, talve você esteja tentando me pedir informações de um ano que não teve copa do mundo.')
  next()
})

bot.on('location', ctx => {
  const loc = ctx.update.message.location
  console.log(loc)
  ctx.reply(`Definitivamente você está em:
            Latitude: ${loc.latitude},
            Longitude: ${loc.longitude}
            Legal, agora posso chegar na sua casa...`)
})

bot.on('contact', ctx => {
  const cont = ctx.update.message.contact
  console.log(cont)
  ctx.reply(`O telefone de ${cont.first_name} 
            é: ${cont.phone_number}
            mas infelizmente eu ainda não consigo mandar uma mensagem para ele sozinho.`)
})

bot.on('voice', ctx => {
  const voz = ctx.update.message.voice
  console.log(voz)
  ctx.reply(`Nesse audio de ${voz.duration} segundos, pude notar que sua voz é legal! Eu ainda não sei falar.`)
})

bot.on('photo', ctx => {
  const foto = ctx.update.message.photo
  console.log(foto)
  console.log(foto.length)
  foto.forEach((photo, i) => {
    ctx.reply(`Bela foto! A resolução dela é de
              ${photo.width} x ${photo.height}`)
  })
})

bot.on('sticker', ctx => {
  const stic = ctx.update.message.sticker
  console.log(stic)
  ctx.reply(`Essa figurinha é muito interessante! Aparentemente ela é ${stic.emoji} 
            do conjunto ${stic.set_name}`)
})

bot.startPolling()