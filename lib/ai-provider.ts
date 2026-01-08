// AI Provider abstraction layer
// Allows easy swapping between AI Studio (demo) and FAL.ai (production)

import { GoogleGenerativeAI } from '@google/generative-ai';

export interface VideoGenerationRequest {
    prompt: string;
    model: string;
    aspectRatio: string;
    duration: string;
}

export interface VideoGenerationResponse {
    jobId: string;
    status: 'pending' | 'processing' | 'completed' | 'failed';
    videoUrl?: string;
    error?: string;
}

export interface AIProvider {
    generate(request: VideoGenerationRequest): Promise<VideoGenerationResponse>;
    getStatus(jobId: string): Promise<VideoGenerationResponse>;
}

// Google AI Studio Provider (for demo/testing)
class AIStudioProvider implements AIProvider {
    private client: GoogleGenerativeAI | null;

    constructor() {
        this.client = process.env.GOOGLE_AI_STUDIO_API_KEY
            ? new GoogleGenerativeAI(process.env.GOOGLE_AI_STUDIO_API_KEY)
            : null;
    }

    async generate(request: VideoGenerationRequest): Promise<VideoGenerationResponse> {
        // For demo purposes, we simulate video generation
        // In reality, AI Studio doesn't do video generation yet
        const jobId = `aistudio_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        return {
            jobId,
            status: 'pending',
        };
    }

    async getStatus(jobId: string): Promise<VideoGenerationResponse> {
        // Simulate job status check
        return {
            jobId,
            status: 'processing',
        };
    }
}

// FAL.ai Provider (for production)
class FALProvider implements AIProvider {
    private apiKey: string;

    constructor() {
        this.apiKey = process.env.FAL_KEY || '';
    }

    async generate(request: VideoGenerationRequest): Promise<VideoGenerationResponse> {
        if (!this.apiKey) {
            throw new Error('FAL.ai API key not configured');
        }

        // TODO: Implement actual FAL.ai API call
        // This is a placeholder for production implementation
        const jobId = `fal_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

        return {
            jobId,
            status: 'pending',
        };
    }

    async getStatus(jobId: string): Promise<VideoGenerationResponse> {
        if (!this.apiKey) {
            throw new Error('FAL.ai API key not configured');
        }

        // TODO: Implement actual FAL.ai status check
        return {
            jobId,
            status: 'processing',
        };
    }
}

// Factory function to get the appropriate provider
export function getAIProvider(): AIProvider {
    // Use FAL.ai if API key is configured, otherwise use AI Studio for demo
    if (process.env.FAL_KEY) {
        return new FALProvider();
    }
    return new AIStudioProvider();
}
