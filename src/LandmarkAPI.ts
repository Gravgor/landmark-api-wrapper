import axios, { AxiosInstance, AxiosResponse } from 'axios';

interface Landmark {
    id: string;
    name: string;
    country: string;
    category: string;
    description?: string;
    lat?: number;
    long?: number;
    [key: string]: any; // additional dynamic properties
}

interface LandmarkSearchParams {
    limit?: number;
    offset?: number;
    sort?: string;
    [key: string]: any; // additional optional query parameters
}

interface LandmarkAPIOptions {
    apiKey: string;
    authKey: string;
    baseURL?: string;
}

class LandmarkAPI {
    private apiKey: string;
    private authKey: string;
    private baseURL: string;
    private client: AxiosInstance;

    constructor({ apiKey, authKey, baseURL = 'https://landmark-api-development.up.railway.app/api/v1' }: LandmarkAPIOptions) {
        this.apiKey = apiKey;
        this.authKey = authKey;
        this.baseURL = baseURL;

        this.client = axios.create({
            baseURL: this.baseURL,
            headers: {
                'Authorization': `Bearer ${this.authKey}`,
                'x-api-key': this.apiKey,
            },
        });
    }

    // Get all landmarks with optional query params (limit, offset, etc.)
    async getLandmarks(params: LandmarkSearchParams = {}): Promise<Landmark[]> {
        try {
            const response: AxiosResponse<Landmark[]> = await this.client.get('/landmarks', { params });
            return response.data;
        } catch (error) {
            console.error('Error fetching landmarks:', error);
            throw error;
        }
    }

    // Get landmark by ID
    async getLandmarkById(id: string): Promise<Landmark> {
        try {
            const response: AxiosResponse<Landmark> = await this.client.get(`/landmarks/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching landmark with ID ${id}:`, error);
            throw error;
        }
    }

    // Get landmarks by country
    async getLandmarksByCountry(country: string): Promise<Landmark[]> {
        try {
            const response: AxiosResponse<Landmark[]> = await this.client.get(`/landmarks/country/${country}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching landmarks from ${country}:`, error);
            throw error;
        }
    }

    // Search landmarks by name
    async searchLandmarksByName(name: string): Promise<Landmark[]> {
        try {
            const response: AxiosResponse<Landmark[]> = await this.client.get(`/landmarks/name/${name}`);
            return response.data;
        } catch (error) {
            console.error(`Error searching for landmarks with name ${name}:`, error);
            throw error;
        }
    }

    // Get landmarks by category
    async getLandmarksByCategory(category: string): Promise<Landmark[]> {
        try {
            const response: AxiosResponse<Landmark[]> = await this.client.get(`/landmarks/category/${category}`);
            return response.data;
        } catch (error) {
            console.error(`Error fetching landmarks with category ${category}:`, error);
            throw error;
        }
    }

    // Search landmarks with POST method (for example by coordinates)
    async searchLandmarksByCoordinates(lat: number, long: number): Promise<Landmark[]> {
        try {
            const response: AxiosResponse<Landmark[]> = await this.client.post('/landmarks/search', { lat, long });
            return response.data;
        } catch (error) {
            console.error('Error searching for landmarks by coordinates:', error);
            throw error;
        }
    }
}

export default LandmarkAPI;
