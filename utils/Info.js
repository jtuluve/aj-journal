'use server'
import Info from '@/models/Info';

export async function createInfo(data) {
    try {
        const newInfo = await Info.create(data);
        return newInfo;
    } catch (error) {
        throw new Error(`Error creating info: ${error.message}`);
    }
}

export async function editInfo(id, data) {
    try {
        const updatedInfo = await Info.findByIdAndUpdate(id, data, { new: true });
        return updatedInfo;
    } catch (error) {
        throw new Error(`Error updating info: ${error.message}`);
    }
}

export async function fetchInfo(id) {
    try {
        const existingInfo = await Info.findById(id);
        return existingInfo;
    } catch (error) {
        throw new Error(`Error fetching info: ${error.message}`);
    }
}

export async function deleteInfo(id) {
    try {
        const deletedInfo = await Info.findByIdAndDelete(id);
        return deletedInfo;
    } catch (error) {
        throw new Error(`Error deleting info: ${error.message}`);
    }
}
