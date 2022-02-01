import { SlashCommandBuilder } from '@discordjs/builders'
import { CommandInteraction, CacheType } from 'discord.js'
import { sendPayloadToClients } from '../../websocket/handlers/connection'
import { BaseCommand } from '../lib/BaseCommand'

export default class extends BaseCommand {
	constructor(client) {
		super(data, client)
	}
	async execute(command: CommandInteraction<CacheType>): Promise<any> {
		sendPayloadToClients({ event: 'AUCTION_START', staff: command.user.id })
		return command.followUp(`Done, wait for confirmation from Easter Boat`)
	}
}

const data = new SlashCommandBuilder()
	.setName('auction')
	.setDescription('Start auction')
	.toJSON()
