import { Params } from 'vk-io/lib/api';

export interface IQuestionParams extends Params.MessagesSendParams {
    /**
     * Айди пользователя, которому нужно задать вопрос
     * @default context.senderId
     */
    targetUserId?: number;
}