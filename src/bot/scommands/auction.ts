import { SlashCommandBuilder } from '@discordjs/builders'
import {
	CommandInteraction,
	CacheType,
	ApplicationCommandPermissionType,
} from 'discord.js'
import { sendPayloadToClients } from '../../websocket/handlers/connection'
import { BaseCommand } from '../lib/BaseCommand'

export default class extends BaseCommand {
	constructor(client) {
		super(data, client, [
			{
				id: '927630083835986001',
				type: ApplicationCommandPermissionType.Role,
				permission: true,
			},
			{
				id: '938408515750473779',
				type: ApplicationCommandPermissionType.Role,
				permission: true,
			},
		])
	}
	async execute(command: CommandInteraction<CacheType>): Promise<any> {
		sendPayloadToClients({ event: 'AUCTION_START', staff: command.user.id })
		return command.followUp(`Done, wait for confirmation from Easter Boat`)
	}
}

const data = new SlashCommandBuilder()
	.setName('auction')
	.setDescription('Start auction')
	.setDefaultPermission(false)
	.toJSON()
