// package: notification_hub
// file: notificationHub.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class NotificationTask extends jspb.Message { 
    getId(): string;
    setId(value: string): NotificationTask;

    getName(): string;
    setName(value: string): NotificationTask;

    getMessagetype(): NotificationTask.MessageType;
    setMessagetype(value: NotificationTask.MessageType): NotificationTask;


    hasEmail(): boolean;
    clearEmail(): void;
    getEmail(): Email | undefined;
    setEmail(value?: Email): NotificationTask;


    hasSms(): boolean;
    clearSms(): void;
    getSms(): SMS | undefined;
    setSms(value?: SMS): NotificationTask;


    hasWhatsapp(): boolean;
    clearWhatsapp(): void;
    getWhatsapp(): Whatsapp | undefined;
    setWhatsapp(value?: Whatsapp): NotificationTask;


    hasPush(): boolean;
    clearPush(): void;
    getPush(): Push | undefined;
    setPush(value?: Push): NotificationTask;

    getSentbyid(): string;
    setSentbyid(value: string): NotificationTask;

    getClient(): string;
    setClient(value: string): NotificationTask;

    getWaterfalltype(): NotificationTask.WaterfallMode;
    setWaterfalltype(value: NotificationTask.WaterfallMode): NotificationTask;

    getTriggeredon(): number;
    setTriggeredon(value: number): NotificationTask;

    getPlatform(): NotificationTask.Platform;
    setPlatform(value: NotificationTask.Platform): NotificationTask;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NotificationTask.AsObject;
    static toObject(includeInstance: boolean, msg: NotificationTask): NotificationTask.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NotificationTask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NotificationTask;
    static deserializeBinaryFromReader(message: NotificationTask, reader: jspb.BinaryReader): NotificationTask;
}

export namespace NotificationTask {
    export type AsObject = {
        id: string,
        name: string,
        messagetype: NotificationTask.MessageType,
        email?: Email.AsObject,
        sms?: SMS.AsObject,
        whatsapp?: Whatsapp.AsObject,
        push?: Push.AsObject,
        sentbyid: string,
        client: string,
        waterfalltype: NotificationTask.WaterfallMode,
        triggeredon: number,
        platform: NotificationTask.Platform,
    }

    export enum MessageType {
    MARKETING = 0,
    TRANSACTIONAL = 1,
    OTP = 2,
    }

    export enum WaterfallMode {
    AUTO = 0,
    OVERRIDE = 1,
    }

    export enum Platform {
    AASAANJOBS = 0,
    OLXPEOPLE = 1,
    }

}

export class Waterfall extends jspb.Message { 
    getPriority(): number;
    setPriority(value: number): Waterfall;

    getOffsettime(): number;
    setOffsettime(value: number): Waterfall;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Waterfall.AsObject;
    static toObject(includeInstance: boolean, msg: Waterfall): Waterfall.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Waterfall, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Waterfall;
    static deserializeBinaryFromReader(message: Waterfall, reader: jspb.BinaryReader): Waterfall;
}

export namespace Waterfall {
    export type AsObject = {
        priority: number,
        offsettime: number,
    }
}

export class SMS extends jspb.Message { 
    getTemplate(): string;
    setTemplate(value: string): SMS;

    getMobile(): string;
    setMobile(value: string): SMS;

    getContext(): string;
    setContext(value: string): SMS;


    hasWaterfallconfig(): boolean;
    clearWaterfallconfig(): void;
    getWaterfallconfig(): Waterfall | undefined;
    setWaterfallconfig(value?: Waterfall): SMS;

    getExpiry(): number;
    setExpiry(value: number): SMS;

    getUserid(): string;
    setUserid(value: string): SMS;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SMS.AsObject;
    static toObject(includeInstance: boolean, msg: SMS): SMS.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SMS, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SMS;
    static deserializeBinaryFromReader(message: SMS, reader: jspb.BinaryReader): SMS;
}

export namespace SMS {
    export type AsObject = {
        template: string,
        mobile: string,
        context: string,
        waterfallconfig?: Waterfall.AsObject,
        expiry: number,
        userid: string,
    }
}

export class Whatsapp extends jspb.Message { 
    getTemplate(): string;
    setTemplate(value: string): Whatsapp;

    getMobile(): string;
    setMobile(value: string): Whatsapp;

    getContext(): string;
    setContext(value: string): Whatsapp;


    hasWaterfallconfig(): boolean;
    clearWaterfallconfig(): void;
    getWaterfallconfig(): Waterfall | undefined;
    setWaterfallconfig(value?: Waterfall): Whatsapp;

    getExpiry(): number;
    setExpiry(value: number): Whatsapp;

    getUserid(): string;
    setUserid(value: string): Whatsapp;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Whatsapp.AsObject;
    static toObject(includeInstance: boolean, msg: Whatsapp): Whatsapp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Whatsapp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Whatsapp;
    static deserializeBinaryFromReader(message: Whatsapp, reader: jspb.BinaryReader): Whatsapp;
}

export namespace Whatsapp {
    export type AsObject = {
        template: string,
        mobile: string,
        context: string,
        waterfallconfig?: Waterfall.AsObject,
        expiry: number,
        userid: string,
    }
}

export class EmailRecipient extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): EmailRecipient;

    getName(): string;
    setName(value: string): EmailRecipient;

    getUserid(): string;
    setUserid(value: string): EmailRecipient;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmailRecipient.AsObject;
    static toObject(includeInstance: boolean, msg: EmailRecipient): EmailRecipient.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmailRecipient, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmailRecipient;
    static deserializeBinaryFromReader(message: EmailRecipient, reader: jspb.BinaryReader): EmailRecipient;
}

export namespace EmailRecipient {
    export type AsObject = {
        email: string,
        name: string,
        userid: string,
    }
}

export class EmailAttachment extends jspb.Message { 
    getFilename(): string;
    setFilename(value: string): EmailAttachment;

    getUrl(): string;
    setUrl(value: string): EmailAttachment;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EmailAttachment.AsObject;
    static toObject(includeInstance: boolean, msg: EmailAttachment): EmailAttachment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EmailAttachment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EmailAttachment;
    static deserializeBinaryFromReader(message: EmailAttachment, reader: jspb.BinaryReader): EmailAttachment;
}

export namespace EmailAttachment {
    export type AsObject = {
        filename: string,
        url: string,
    }
}

export class Email extends jspb.Message { 
    getTemplate(): string;
    setTemplate(value: string): Email;

    clearTorecipientsList(): void;
    getTorecipientsList(): Array<EmailRecipient>;
    setTorecipientsList(value: Array<EmailRecipient>): Email;
    addTorecipients(value?: EmailRecipient, index?: number): EmailRecipient;

    getContext(): string;
    setContext(value: string): Email;

    getSubject(): string;
    setSubject(value: string): Email;


    hasSender(): boolean;
    clearSender(): void;
    getSender(): EmailRecipient | undefined;
    setSender(value?: EmailRecipient): Email;


    hasReplyto(): boolean;
    clearReplyto(): void;
    getReplyto(): EmailRecipient | undefined;
    setReplyto(value?: EmailRecipient): Email;

    clearCcrecipientsList(): void;
    getCcrecipientsList(): Array<EmailRecipient>;
    setCcrecipientsList(value: Array<EmailRecipient>): Email;
    addCcrecipients(value?: EmailRecipient, index?: number): EmailRecipient;

    clearAttachmentsList(): void;
    getAttachmentsList(): Array<EmailAttachment>;
    setAttachmentsList(value: Array<EmailAttachment>): Email;
    addAttachments(value?: EmailAttachment, index?: number): EmailAttachment;


    hasWaterfallconfig(): boolean;
    clearWaterfallconfig(): void;
    getWaterfallconfig(): Waterfall | undefined;
    setWaterfallconfig(value?: Waterfall): Email;

    getExpiry(): number;
    setExpiry(value: number): Email;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Email.AsObject;
    static toObject(includeInstance: boolean, msg: Email): Email.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Email, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Email;
    static deserializeBinaryFromReader(message: Email, reader: jspb.BinaryReader): Email;
}

export namespace Email {
    export type AsObject = {
        template: string,
        torecipientsList: Array<EmailRecipient.AsObject>,
        context: string,
        subject: string,
        sender?: EmailRecipient.AsObject,
        replyto?: EmailRecipient.AsObject,
        ccrecipientsList: Array<EmailRecipient.AsObject>,
        attachmentsList: Array<EmailAttachment.AsObject>,
        waterfallconfig?: Waterfall.AsObject,
        expiry: number,
    }
}

export class Push extends jspb.Message { 
    getTemplate(): string;
    setTemplate(value: string): Push;

    getToken(): string;
    setToken(value: string): Push;

    getContext(): string;
    setContext(value: string): Push;


    hasWaterfallconfig(): boolean;
    clearWaterfallconfig(): void;
    getWaterfallconfig(): Waterfall | undefined;
    setWaterfallconfig(value?: Waterfall): Push;

    getExpiry(): number;
    setExpiry(value: number): Push;

    getUserid(): string;
    setUserid(value: string): Push;

    getExtrapayload(): string;
    setExtrapayload(value: string): Push;

    getClientplatform(): Push.ClientPlatform;
    setClientplatform(value: Push.ClientPlatform): Push;

    getDryrun(): boolean;
    setDryrun(value: boolean): Push;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Push.AsObject;
    static toObject(includeInstance: boolean, msg: Push): Push.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Push, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Push;
    static deserializeBinaryFromReader(message: Push, reader: jspb.BinaryReader): Push;
}

export namespace Push {
    export type AsObject = {
        template: string,
        token: string,
        context: string,
        waterfallconfig?: Waterfall.AsObject,
        expiry: number,
        userid: string,
        extrapayload: string,
        clientplatform: Push.ClientPlatform,
        dryrun: boolean,
    }

    export enum ClientPlatform {
    ANDROID = 0,
    IOS = 1,
    WEB = 2,
    }

}
