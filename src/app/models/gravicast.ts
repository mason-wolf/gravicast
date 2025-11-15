/**
 * Represents a time-sensitive event.
 * A physics-themed 'gravity-based' notification,
 * or a 'cast' to an interested subscriber.
 */
export interface Gravicast {
    Id: number;
    Title: string;
    Description: string;
    // Message displayed to user when they save it.
    SavedMessage: string;
    // Optional location.
    At: string;
    // Optional originator
    By: string;
    StartTime: string;
    EndTime: string;
    ImageUrl: string;
}